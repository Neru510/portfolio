import skills from '@/data/skills'
import { subskills } from "@/data/subskills";

export default function SubSkills({ idSkill, idSubSkill, justification, level }) {
    const skill = skills.find(s => s.id === String(idSkill));
    if (!skill) return null;

    if (level === undefined) {
        level = 2;
    }

    const niveauArray = subskills[idSkill]?.[level];

    if (!niveauArray || niveauArray.length === 0) return null;

    const startIdx = typeof niveauArray[0] === "string" ? 1 : 0;

    const subskill = niveauArray.slice(startIdx).find(
        (sk, idx) =>
            (typeof sk === "object") &&
            (sk.nom === idSubSkill || String(idx + 1) === String(idSubSkill))
    );

    if (!subskill) return null;

    const color = skill.color;
    const nom = subskill.nom;
    const descr = subskill.descr;

    return (
        <div
            className="rounded-xl shadow-md p-5 mb-6"
            style={{ backgroundColor: color, color: "#fff" }}
        >
            <h4 className="text-base font-semibold italic mb-2">{`${nom} : ${descr}`}</h4>
            {justification && (
                <p className="text-sm font-light bg-white/20 rounded p-3">{justification}</p>
            )}
        </div>
    );
}
