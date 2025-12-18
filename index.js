import OBR from "https://cdn.jsdelivr.net/npm/@owlbear-rodeo/sdk/+esm";

const DONKEY_IMAGE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/1/1a/Donkey_in_Clovelly%2C_North_Devon%2C_England.jpg";

OBR.onReady(async () => {
  // Get scene size
  const scene = await OBR.scene.getMetadata();
  const width = scene?.scene?.width ?? 2000;
  const height = scene?.scene?.height ?? 2000;

  // Create image item
  const donkey = {
    id: crypto.randomUUID(),
    type: "IMAGE",
    name: "Donkey",
    layer: "MAP",
    position: {
      x: width / 2,
      y: height / 2
    },
    scale: {
      x: 1,
      y: 1
    },
    rotation: 0,
    visible: true,
    locked: false,
    image: {
      url: DONKEY_IMAGE_URL,
      mime: "image/jpeg"
    }
  };

  await OBR.scene.items.addItems([donkey]);

  OBR.notification.show("🐴 A donkey has appeared!");
});