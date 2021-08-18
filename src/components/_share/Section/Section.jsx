const Section = ({ title, children }) => {
  return (
    <section>
      <div>
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;