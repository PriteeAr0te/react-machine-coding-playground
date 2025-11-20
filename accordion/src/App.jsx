import Accordion from "./components/Accordion";

function App() {
  const items = [
    // {
    //   title: "JavaScript Basics",
    //   content: "Learn variables, functions, and loops in JavaScript."
    // },
    // {
    //   title: "React.js Overview",
    //   content: "Understand components, state, and props in React."
    // },
    // {
    //   title: "Node.js",
    //   content: "Basics of server-side development with Node.js."
    // },
    // {
    //   title: "Full-Stack Development",
    //   content: "Build full-stack apps with React and Node.js."
    // },
  ];

  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="w-full max-w-lg rounded-lg">
          <Accordion items={items} />
        </div>
      </div>
    </>
  )
}

export default App
