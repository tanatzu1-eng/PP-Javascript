function Section({children}) {
    return(
        <>
            <div className = "grid grid-cols-12 gap-7 text-amber-50 py-5 px-10">
                {children}
            </div>
        </>
    )
}

export default Section;
