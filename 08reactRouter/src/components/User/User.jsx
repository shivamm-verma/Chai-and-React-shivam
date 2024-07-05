import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (


      <div className="min-h-96 justify-center text-center py-5 px-20 bg-gray-100 text-3xl font-mono ">
        User: {userid}
      </div>
      
      
  );
}

export default User;
