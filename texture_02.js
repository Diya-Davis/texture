const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);
}

function draw(target, x, y, y1) {
    r.BeginTextureMode(target);
    r.DrawCircle(x, y, 5, r.RED);
    r.DrawCircle(x, y1, 5, r.BLUE);

    r.EndTextureMode();

    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    r.DrawTexture(target.texture, 0, 0, r.WHITE);
    r.EndDrawing();
}

function loop() {
    const target = r.LoadRenderTexture(800, 600);

    let x = 0;
    let y = 0;
    let y1 = 0;
    while (!r.WindowShouldClose()) {
        y = 300 + 100 * Math.sin(x * (Math.PI / 180));
        y1 = 300 + 100 * Math.cos(x * (Math.PI / 180));
        draw(target, x, y, y1);
        x = x + 2;
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    setup(800, 600, 60, "texture_02");
    loop();
    teardown();
}

main();
