
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center mx-auto my-8 md:w-4/12">
            <p className="text-yellow-400 mb-2 font-semibold">--- {subHeading} ---</p>
            <h2 className="text-3xl uppercase    border-y-2 py-4">{heading}</h2>
        </div>

    );
};

export default SectionTitle;