// Notes App JavaScript Code

// Variables
let notes = []; // Array to hold notes
let currentTheme = 'light'; // Current theme

// Function to create a new note
function createNote(title, content) {
    const note = { id: Date.now(), title: title, content: content, pinned: false };
    notes.push(note);
    renderNotes();
}

// Function to edit an existing note
function editNote(id, newTitle, newContent) {
    const note = notes.find(n => n.id === id);
    if (note) {
        note.title = newTitle;
        note.content = newContent;
        renderNotes();
    }
}

// Function to delete a note
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    renderNotes();
}

// Function to toggle dark/light theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = currentTheme;
}

// Function to search notes
function searchNotes(query) {
    const filteredNotes = notes.filter(n => n.title.includes(query) || n.content.includes(query));
    renderNotes(filteredNotes);
}

// Function to manage categories
function addCategory(noteId, category) {
    const note = notes.find(n => n.id === noteId);
    if (note) {
        note.category = category;
        renderNotes();
    }
}

// Function for rich text editor
function formatText(formatType) {
    document.execCommand(formatType);
}

// Auto-save notes every 30 seconds
setInterval(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
}, 30000);

// Function to export notes
function exportNotes(format) {
    // Export function implementation here
}

// Function for pinning/unpinning notes
function togglePin(noteId) {
    const note = notes.find(n => n.id === noteId);
    if (note) {
        note.pinned = !note.pinned;
        renderNotes();
    }
}

// Function to display character count
function displayCharacterCount(content) {
    const count = content.length;
    document.getElementById('charCount').innerText = `Character Count: ${count}`;
}

// Function to render notes
function renderNotes(filteredNotes = notes) {
    // Rendering logic here
}

// Add Event Listeners for buttons
document.getElementById('createNoteBtn').addEventListener('click', () => {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    createNote(title, content);
});
document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

// More event listeners can be added here...

