import loading from '../assets/loading.gif';

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <img src={loading} alt="Loading" className="w-[200px] h-auto" />
            <h1 className="mt-4 text-center text-xl Product-Sans text-grey">Loading Data</h1>
        </div>
    )
}

export default Loader;