import CreateUser from "./../features/user/CreateUser";
function Home() {
  return (
    <div className="mt-8 py-8 text-center text-xl font-semibold text-stone-700">
      <h1 className="my-3 text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
