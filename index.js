import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

// URL to your donkey image (must be HTTPS)
const DONKEY_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg";

OBR.onReady(async () => {
  try {
    // Get current scene size
    const scene = await OBR.scene.getMetadata();
    const width = scene?.scene?.width ?? 2000;
    const height = scene?.scene?.height ?? 2000;

    // Create a donkey image item
    const donkey = {
      id: crypto.randomUUID(),
      type: "IMAGE",
      name: "Donkey",
      layer: "MAP",
      position: {
        x: width / 2,
        y: height / 2
      },
      scale: { x: 1, y: 1 },
      rotation: 0,
      visible: true,
      locked: false,
      image: {
        url: DONKEY_IMAGE_URL,
        mime: "image/jpeg"
      }
    };

    // Add donkey to the scene
    await OBR.scene.items.addItems([donkey]);

    // Optional: show notification
    OBR.notification.show("🐴 A donkey has appeared!");
  } catch (err) {
    console.error("Error spawning donkey:", err);
    OBR.notification.show("❌ Failed to spawn donkey.");
  }
});
