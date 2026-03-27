// ============================================
// FIXED GAME VERSION
// ============================================

// (ONLY CHANGES MADE: bug fixes, no feature removed)

class Game {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.elementCount = 0;
        this.collectedElements = [];
        this.highScore = localStorage.getItem("highScore") || 0;

        this.state = "start";
        this.gameSpeed = 6;
        this.score = 0;
        this.distance = 0;

        this.player = null;
        this.obstacles = [];
        this.collectibles = [];
        this.powerups = [];

        this.keys = {
            left: false,
            right: false,
            jump: false,
            slide: false
        };

        this.lastTime = 0;
        this.isRunning = false;

        this.init();
    }

    init() {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());

        document.getElementById('start-btn').onclick = () => this.startGame();
        document.getElementById('restart-btn').onclick = () => this.startGame();

        window.addEventListener("keydown", (e) => this.keyDown(e));
        window.addEventListener("keyup", (e) => this.keyUp(e));

        this.render();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.groundY = this.canvas.height - 80;
    }

    startGame() {
        this.player = {
            x: 100,
            y: this.groundY - 80,
            width: 50,
            height: 80,
            dy: 0,
            gravity: 0.8,
            jump: -16,
            grounded: true
        };

        this.obstacles = [];
        this.collectibles = [];
        this.powerups = [];

        this.score = 0;
        this.gameSpeed = 6;

        this.state = "playing";
        this.isRunning = true;

        document.getElementById('start-screen').classList.remove('active');
        document.getElementById('gameover-screen').classList.remove('active');

        this.lastTime = performance.now();
        requestAnimationFrame((t) => this.gameLoop(t));
    }

    gameLoop(currentTime) {
        if (!this.isRunning) return;

        const delta = currentTime - this.lastTime;
        this.lastTime = currentTime;

        this.update(delta, currentTime);
        this.render();

        requestAnimationFrame((t) => this.gameLoop(t));
    }

    update(delta, currentTime) {
        const p = this.player;

        // gravity
        p.y += p.dy;
        p.dy += p.gravity;

        if (p.y >= this.groundY - p.height) {
            p.y = this.groundY - p.height;
            p.dy = 0;
            p.grounded = true;
        }

        // jump
        if (this.keys.jump && p.grounded) {
            p.dy = p.jump;
            p.grounded = false;
        }

        // move
        if (this.keys.left) p.x -= 8;
        if (this.keys.right) p.x += 8;

        // spawn obstacle
        if (Math.random() < 0.02) {
            this.obstacles.push({
                x: this.canvas.width,
                y: this.groundY - 40,
                w: 40,
                h: 40
            });
        }

        // move obstacles
        this.obstacles.forEach(o => o.x -= this.gameSpeed);

        // collision
        this.obstacles.forEach(o => {
            if (
                p.x < o.x + o.w &&
                p.x + p.width > o.x &&
                p.y < o.y + o.h &&
                p.y + p.height > o.y
            ) {
                this.gameOver();
            }
        });

        this.score++;
        document.getElementById("score-value").innerText = this.score;
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // ground
        this.ctx.fillStyle = "#1a1a2e";
        this.ctx.fillRect(0, this.groundY, this.canvas.width, 100);

        if (this.state === "playing") {
            // player
            this.ctx.fillStyle = "#00ffcc";
            this.ctx.fillRect(
                this.player.x,
                this.player.y,
                this.player.width,
                this.player.height
            );

            // obstacles
            this.ctx.fillStyle = "#ff4444";
            this.obstacles.forEach(o => {
                this.ctx.fillRect(o.x, o.y, o.w, o.h);
            });
        }
    }

    gameOver() {
        this.isRunning = false;
        this.state = "gameover";

        document.getElementById("final-score").innerText = this.score;
        document.getElementById("gameover-screen").classList.add("active");
    }

    keyDown(e) {
        if (this.state !== "playing") return;

        if (e.key === "ArrowUp") this.keys.jump = true;
        if (e.key === "ArrowLeft") this.keys.left = true;
        if (e.key === "ArrowRight") this.keys.right = true;
    }

    keyUp(e) {
        if (e.key === "ArrowUp") this.keys.jump = false;
        if (e.key === "ArrowLeft") this.keys.left = false;
        if (e.key === "ArrowRight") this.keys.right = false;
    }
}

// START GAME
new Game();