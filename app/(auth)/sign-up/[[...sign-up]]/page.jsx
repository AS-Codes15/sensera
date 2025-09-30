// import { SignUp } from "@clerk/nextjs";

// const Page = () =>{
//     return(
//         <SignUp />
//     )
// }

// export default Page;

import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="flex items-center justify-center">
      <SignUp
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
