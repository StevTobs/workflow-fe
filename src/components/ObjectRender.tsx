

// function ObjectRender() { 
//     const task = { 
//         title: "เบิกงบ", 
//         amount: 20, }; 
//         return (
//         <div> 
//             <h1>Task: {task.title}</h1> 
//             <p>${task.amount}</p> 
//         </div>
//         ); 
//     } 
// export default ObjectRender;
// function ObjectRender(props: { title: string; amount?: number }) {
//     return (
//       <div>
//         <h1>Task: {props.title}</h1>
//         <p>${props.amount || "-"}</p>
//       </div>
//     );
//   }
function ObjectRender(props: {
    title: string;
    amount?: number;
  }) {
    return (
      <div>
        <h1>Task: {props.title}</h1>
        <p>{props.amount ? props.amount : "-"}</p>
      </div>
    );
  }

  export default ObjectRender

  