const Section = ({ children, className, id }) => {
    return (
        <section
            id={id && id}
            className={`section ${className ? className : ""}`}
        >
            {children}
        </section>
    );
};

export default Section;
