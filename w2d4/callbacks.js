// Callback hell in the making
// setTimeout(() => {
//   console.log("WAZAAAA");
//   setTimeout(() => {
//     console.log("WAZAAAA");
//     setTimeout(() => {
//       console.log("WAZAAAA");
//       setTimeout(() => {
//         console.log("WAZAAAA");
//         setTimeout(() => {
//           console.log("WAZAAAA");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const boilWater = (nextAction) => {
  console.log("Starting boil");
  setTimeout(() => {
    if (Math.random() > 0.9) {
      console.log("Finished boil");
      return nextAction();
    }
    throw new Error("Kettle explosion :( ");
  }, 2000);
};
const grindBeans = (nextAction) => {
  console.log("BRRRRRRRR");
  console.log("DING");
  nextAction();
};
const pourWaterOnBeans = (nextAction) => {
  console.log("BLUP BLUP BLUP");
  console.log("PLOCK PLOCK");
  nextAction();
};
const enjoyTheMarvelousCoffee = () => {
  console.log("SLURP");
  console.log("Wow");
};

const prepCoffee = () => {
  boilWater(() => {
    pourWaterOnBeans(() => {
      enjoyTheMarvelousCoffee();
    });
  });
};

try {
  prepCoffee();
} catch (e) {
  console.log("oh no");
  console.log(e.message);
}

const boilWaterv2 = (nextAction) => {
  console.log("Starting boil");
  setTimeout(() => {
    if (Math.random() > 0.9) {
      console.log("Finished boil");
      return nextAction("success");
    }
    // throw new Error("Kettle explosion :( ");
    return nextAction("fail");
  }, 2000);
};

const boilWaterv3 = (successAction, failAction) => {
  console.log("Starting boil");
  setTimeout(() => {
    if (Math.random() > 0.9) {
      console.log("Finished boil");
      return successAction();
    }
    // throw new Error("Kettle explosion :( ");
    return failAction();
  }, 2000);
};

boilWaterv3(
  () => {
    grindBeans(
      () => {
        pourWaterOnBeans(
          () => {
            enjoyTheMarvelousCoffee();
          },
          () => console.log("pour fail")
        );
      },
      () => console.log("grind fail")
    );
  },
  () => console.log("boil fail")
);
