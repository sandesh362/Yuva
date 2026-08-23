export function matchScore(student: { skills?: string[]; availability?: string[]; location?: { city?: string } }, gig: { requiredSkills?: string[]; workType?: string; location?: { city?: string } }) {
  const skills = student.skills ?? [], required = gig.requiredSkills ?? [];
  const overlap = required.length ? required.filter((skill) => skills.some((s) => s.toLowerCase() === skill.toLowerCase())).length / required.length : 1;
  const availability = student.availability?.length ? 1 : .5;
  const locality = student.location?.city && student.location.city === gig.location?.city ? 1 : .5;
  return Math.round((overlap * 60 + locality * 20 + availability * 10 + 10));
}
