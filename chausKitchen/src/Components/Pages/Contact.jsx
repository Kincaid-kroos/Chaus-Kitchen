import  { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contact from '../Images/contact.jpg';

const Contact = () => {
  
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      toast.error("Please all field are required fill,Email not sent!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      emailjs
        .sendForm(
          "service_abzd5cf",
          "template_ncd937d",
          form.current,
          "cea2TAaV7fu3Aqtyp"
        )
        .then(
          () => {
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");

            setTimeout(() => {
              toast.success("Email Sent, Will contact you as soon as Possible", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div id="contact"
    className="bg-[#e4f2fc] mt-20 rounded-br-3xl rounded-tl-3xl">
      <h1 className="md:text-5xl text-3xl text-[#030301] font-semibold">Send us a Mail</h1>
{/*Flex-container*/}
    <div className="  mx-auto flex  flex-col md:flex-row  p-10 md:space-x-20 space-y-5">
      {/*item a*/}
      <div className="flex flex-col ">
      <img src={contact} alt="contact img" className="md:h-[350px] md:w-[350px] rounded-full"/>
      </div>
       {/*item b*/}
      <form
        onSubmit={sendEmail}
        ref={form}
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-[20px]">
          <input
            type="text"
            placeholder="Name"
            value={name}
            name="clientname "
            onChange={(e) =>  setName(e.target.value)}
            className="md:w-[299px]  w-[315px] mx-auto placeholder-dark h-[42px] focus:outline-white bg-[#ffffff] p-2   rounded-tr-3xl rounded-bl-3xl"
          />
          <input
            type="text"
            placeholder="Email"
            name="clientemail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="md:w-[299px]  w-[315px] mx-auto placeholder-dark  focus:outline-white bg-[#ffffff] h-[42px] p-2   rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
        <div className="flex flex-col ">
          <input
            type="text"
            name="usersubject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject....."
            className="md:w-[633px] w-[315px] mx-auto placeholder-dark bg-[#ffffff] h-[42px] p-2  focus:outline-white rounded-tr-3xl rounded-bl-3xl"
          />
        </div>
        <div className="flex flex-col">
          <textarea
            id=""
            cols="30"
            value={message}
            name="usermessage"
            onChange={(e) => setMessage(e.target.value)}
            rows="10"
            placeholder="Message......"
            className="md:w-[633px] w-[315px] mx-auto  bg-[#ffffff] h-[200px] p-2 focus:outline-white placeholder-dark   rounded-tr-3xl rounded-bl-3xl"
          ></textarea>
        </div>
        <div className="flex w-[315px] mx-auto md:w-[633px] items-center  ">
          <input
            type="checkbox"
            name="checkboxx"
            className="mr-2  h-6 w-6 bg-[#46db41]"
          />
          <p className="md:text-[15px] leading-[15px]  w-[584px] text-sm">
            Would love to receive information on newsletters and more?
          </p>
        </div>
        <div className="flex md:justify-start justify-center">
          <button
            className=" bg-[#7ab916] md:mr-24 hover:scale-95 duration-1000 transition-all text-white uppercase text-center py-4 px-8 justify-start  shadow-gray-100 rounded-tl-3xl rounded-br-3xl shadow-xl hover:bg-[#FFA300] "
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      
      <ToastContainer />
    </div>
    </div>
  );
};




export default Contact;
