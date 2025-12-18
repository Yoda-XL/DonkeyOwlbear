import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

// Donkey image URL (must be HTTPS)
const DONKEY_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_EZcfpmITihxISoo4YomHL5XXP5G1J-GwqF0zURsaUAkHjwZPpkcx8thKIh5YofJC21rz1YAoZ5y37R9PsJq2GoAUPqRHxGy4_HaLX8&s=10";

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
