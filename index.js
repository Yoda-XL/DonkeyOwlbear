import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

const DONKEY_IMAGE_URL =
  "https://spana.org/au/wp-content/uploads/sites/4/2023/12/Cute-donkey-Nouakchott-Mauritania-1024x685.jpg";

async function spawnDonkey() {
  try {
    // Wait until a scene is loaded
    let scene = null;
    while (!scene?.scene) {
      scene = await OBR.scene.getMetadata();
      if (!scene?.scene) {
        await new Promise(r => setTimeout(r, 200)); // wait 200ms
      }
    }

    const width = scene.scene.width ?? 2000;
    const height = scene.scene.height ?? 2000;

    const donkey = {
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
    };

    await OBR.scene.items.addItems([donkey]);
    OBR.notification.show("🐴 A donkey has appeared!");
  } catch (err) {
    console.error("Failed to spawn donkey:", err);
    OBR.notification.show("❌ Failed to spawn donkey.");
  }
}

// Run when SDK is ready
OBR.onReady(spawnDonkey);
