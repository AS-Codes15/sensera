// import { SignIn } from "@clerk/nextjs";

// const Page = () =>{
//     return(
//         <SignIn />
//     )
// }

// export default Page;



import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <SignIn
        appearance={{
          elements: {
            card: "w-[420px] p-8", // wider card with padding
          },
        }}
      />
    </div>
  );
};

export default Page;

