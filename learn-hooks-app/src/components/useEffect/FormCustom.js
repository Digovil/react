import useForm from "../../hooks/useForm";

export default function FormCustom() {

  const [formValues,handleInputChange ] =  useForm({
    name: '',
    email: '',
    pass:''
  });

  const {name,email, pass} = formValues;



  return (
    <>
      <div className='w-75 m-auto card p-4 mb-4 mt-4'>
        <div className='w-75 m-auto'>
          <h1 className='m-4'><strong className='text-danger'>Custom Hook Form</strong></h1>
        </div>
        <div className="d-flex justify-content-center flex-column">
          <input 
            type='text'
            name='name'
            className= 'form-control'
            placeholder= "Tu nombre"
            autoComplete= "off"
            value={name}
            onChange = {handleInputChange}
          />

          <input 
            type='email'
            name='email'
            className= 'form-control'
            placeholder= "email@gmail.com"
            autoComplete= "off"
            value={email}
            onChange = {handleInputChange}
          />    

          <input 
            type='password'
            name='pass'
            className= 'form-control'
            placeholder= "******"
            value={pass}
            onChange = {handleInputChange}
          />  
        </div>
        
      </div>

    </>
  );
}