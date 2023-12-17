import RegisterForm from "../components/register-page/RegisterForm";

function Register() {
  return (
    <section className="py-6">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-[25px] text-[#3cb47c] mb-5">Sign Up</h2>
          <RegisterForm />
        </div>
      </div>
    </section>
  )
}

export default Register;