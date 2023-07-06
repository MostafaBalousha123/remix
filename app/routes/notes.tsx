import type { LinksFunction } from '@remix-run/node';
import NewNote, { links as newNoteLinks } from '~/components/NewNote';
import notesStyles from '~/styles/notes.css'

export const links: LinksFunction = () => 
  [...newNoteLinks(), {rel:'stylesheet', href: notesStyles}]

export default function NotesPage() {
  return (
    <main className='notes-page'>
      <NewNote />
    </main>
  );
}

