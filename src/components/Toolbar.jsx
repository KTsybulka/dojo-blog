
function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        {/* Ensure message is a string */}
        <AlertButton message="Playing">
          Play Miovue
        </AlertButton>
        <AlertButton message="Uploaded">
          Upload Miovue
        </AlertButton>
      </div>
    );
  }



// import { useState } from 'react';
// const AddGroceryForm = (props) => {
//     const [groceryName, setGroceryName] = useState('');

//     const handleChange = (e) => {
//         setGroceryName(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.addGrocery(groceryName);
//         setGroceryName('');
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type='text'
//                 value={groceryName}
//                 onChange={handleChange}
//                 placeholder='Enter Grocery'
//             />
//             <input type='submit' value='Add Grocery' />
//         </form>
//     );
// };

// export default function MyForm() {
//     function handleSubmit(e) {
//       // Prevent the browser from reloading the page
//       e.preventDefault();
  
//       // Read the form data
//       const form = e.target;
//       const formData = new FormData(form);
  
//       // You can pass formData as a fetch body directly:
//       fetch('/some-api', { method: form.method, body: formData });
  
//       // Or you can work with it as a plain object:
//       const formJson = Object.fromEntries(formData.entries());
//       console.log(formJson);
//     }
  
//     return (
//       <form method="post" onSubmit={handleSubmit}>
//         <label>
//           Text input: <input name="myInput" defaultValue="Some initial value" />
//         </label>
//         <hr />
//         <label>
//           Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//         </label>
//         <hr />
//         <p>
//           Radio buttons:
//           <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
//           <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
//           <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
//         </p>
//         <hr />
//         <button type="reset">Reset form</button>
//         <button type="submit">Submit form</button>
//       </form>
//     );
//   }

