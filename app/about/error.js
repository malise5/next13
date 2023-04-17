"use client";
function Error({ error, reset }) {
    return (
        <div>
            this is not loading up : {error.message}
            <button onClick={() => reset()}></button>
        </div>
    );
}

export default Error;
