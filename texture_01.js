const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);
}

function draw(target) {
    r.BeginDrawing();
    r.ClearBackground(r.DARKGRAY);

    r.DrawTexture(target.texture, 50, 50, r.WHITE);
    r.DrawTexture(target.texture, 300, 50, r.WHITE);
    r.DrawTexture(target.texture, 550, 50, r.WHITE);
    r.DrawTexture(target.texture, 50, 300, r.WHITE);
    r.DrawTexture(target.texture, 300, 300, r.WHITE);
    r.DrawTexture(target.texture, 550, 300, r.WHITE);

    r.EndDrawing();
}

function loop() {
    const target = r.LoadRenderTexture(200, 200);
    r.BeginTextureMode(target);

    r.ClearBackground(r.BLACK);
    r.DrawCircle(100, 100, 60, r.RED);
    r.DrawCircle(80, 80, 15, r.WHITE);

    r.EndTextureMode();
    while (!r.WindowShouldClose()) {
        draw(target);
    }
}

function teardown() {
    r.CloseWindow();
}

function main() {
    setup(800, 600, 60, "texture_01");
    loop();
    teardown();
}

main();
