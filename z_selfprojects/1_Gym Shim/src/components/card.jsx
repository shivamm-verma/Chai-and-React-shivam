import React from "react";

function Card({imgTitle="Preacher[biceps]", imgLink="https://img.freepik.com/free-photo/sportsman-training-biceps-with-dumbbell_7502-4743.jpg?t=st=1716927499~exp=1716931099~hmac=bb7c98d814d8b6967a4565cce95651bd5cd667b98c9e4ffa898ffc78801c4551&w=1060"}) {
  return (
    <>
      <div class="w-[300px] rounded-md border mt-8 m-4 ">
        <img
          src={imgLink}
          alt="Laptop"
          class="h-[200px] w-full rounded-md object-cover"
        />
        <div class="p-4">
          <h1 class="text-lg font-semibold">{imgTitle}</h1>
          <p class="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button
            type="button"
            class="mt-4 rounded-sm bg-black px-2.5 py-1 text-[13px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Learn
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
