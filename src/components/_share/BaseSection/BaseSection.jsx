import s from "./BaseSection.module.css";

const BaseSection = ({ title, children }) => {
    return (
        <section className={s.section}>
            <div className={s.container}>
                {title && <h1 className={s.title}>{title}</h1>}
                {children}
            </div>
        </section>
    );
}

export default BaseSection;