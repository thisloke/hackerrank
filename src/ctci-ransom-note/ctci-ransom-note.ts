export function checkMagazine(magazine: Array<string>, note: Array<string>): 'Yes' | 'No' {

    if(magazine.length === 0 && note.length > 0) {
        return 'No'
    }

    if(note.length === 0) {
        return 'Yes'
    }

    for(const n of note) {
        const index = magazine.indexOf(n);
        if(index > -1) {
            magazine.splice(index, 1)
        } else {
            return 'No'
        }
    }

    return 'Yes'
}