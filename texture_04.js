const r = require("raylib");

function setup(width, height, fps, title) {
    r.SetTraceLogLevel(r.LOG_NONE);
    r.InitWindow(width, height, title);
    r.SetTargetFPS(fps);
}

function draw(target) {
    r.BeginDrawing();

    const source = {
        x: 40,
        y: 40,
        width: -120,
        height: -120,
    };

    r.DrawTextureRec(target.texture, source, { x: 50, y: 50 }, r.WHITE);
    r.DrawTextureRec(target.texture, source, { x: 200, y: 50 }, r.WHITE);
    r.DrawTextureRec(target.texture, source, { x: 350, y: 50 }, r.WHITE);
    r.DrawTextureRec(target.texture, source, { x: 500, y: 50 }, r.WHITE);

    r.EndDrawing();
}

function loop() {
    const target = r.LoadRenderTexture(200, 200);

    r.BeginTextureMode(target);

    r.ClearBackground(r.GRAY);
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
    setup(800, 600, 60, "texture_03");
    loop();
    teardown();
}

main();
