import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

// Donkey image URL (must be HTTPS)
const DONKEY_IMAGE_URL =
  "https://spana.org/au/wp-content/uploads/sites/4/2023/12/Cute-donkey-Nouakchott-Mauritania-1024x685.jpg";

OBR.onReady(async () => {
  try {
    // Get scene metadata
    const scene = await OBR.scene.getMetadata();
    if (!scene || !scene.scene) throw new Error("Scene not loaded");

    const width = scene.scene.width ?? 2000;
    const height = scene.scene.height ?? 2000;

    // Add donkey image in the center
    await OBR.scene.items.addItems([
      {
        id: crypto.randomUUID(),
        type: "IMAGE",
        name: "Donkey",
        layer: "MAP",
        position: { x: width / 2, y: height / 2 },
        scale: { x: 1, y: 1 },
        rotation: 0,
        visible: true,
        locked: false,
        image: { url: DONKEY_IMAGE_URL, mime: "image/jpeg" }
      }
    ]);

    OBR.notification.show("🐴 A donkey has appeared!");
  } catch (err) {
    console.error("Failed to spawn donkey:", err);
    OBR.notification.show("❌ Failed to spawn donkey.");
  }
});

