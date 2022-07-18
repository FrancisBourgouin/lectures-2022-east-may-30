const entries = {
  components: [
    {
      id: 1,
      subject: "components",
      content: "Components are the building blocks of react",
    },
    {
      id: 2,
      subject: "components",
      content:
        "Take a functionality of a small piece of your application and encapsulated its own isolated container",
    },
  ],
  props: [
    {
      id: 3,
      subject: "props",
      content:
        "Props are to components what attributes are to an HTML element (the 'src' tag in an <img> is needed to make the image work)",
    },
    {
      id: 4,
      subject: "props",
      content:
        "Props are accessible in an object in the first argument of a functional component",
    },
  ],
};

console.log(Object.keys(entries));

const subjects = Object.keys(entries);

const entriesForFirstSubject = entries[subjects[0]];

// console.log(entriesForFirstSubject);

const output = [];
for (const subject of subjects) {
  output.push(entries[subject]);
  // console.log(entries[subject]);
  
}
console.log(output);

const outputButBetter = subjects.map((subject) => entries[subject]);
