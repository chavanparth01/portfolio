import { useEffect } from "react";
import { useActiveSectionContext } from "../../Context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { links } from "../data";

type sectionType = typeof links[number]["name"]

export default function useSectionInView(section: sectionType, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold
    });
    const { setActiveSection } = useActiveSectionContext();

    // Update active section only when `inView` changes
    useEffect(() => {
        if (inView) {
            setActiveSection(section);
            console.log(`${section} Page came into View`)
        }
    }, [inView, setActiveSection, section]); 

    return ref  
}