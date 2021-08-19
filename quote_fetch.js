/**
 * Big, ugly, array of quotes. It's just quicker for the site to do it this way
 * than to read in quotes from a text file (not using a quote API since these 
 * quotes are personally curated).
 */
const quote_arr = [
    "\"Computer science inverts the normal. In normal science, you're given a world, and your job is to find out the rules. In computer science, you give the computer the rules, and it creates the world.\" - Alan Kay",
    "\"To me, mathematics, computer science, and the arts are insanely related. They're all creative expressions.\" - Sebastian Thrun",
    "\"We're losing track of the vastness of the potential for computer science. We really have to revive the beautiful intellectual joy of it, as opposed to the business potential.\" - Jaron Lanier",
    "\"Computer science is not just for smart 'nerds' in hoodies coding in basements. Coding is extremely creative and is an integral part of almost every industry.\" - Reshma Saujani",
    "\"If people never did silly things, nothing intelligent would ever get done.\" - Ludwig Wittgenstein",
    "\"Simplicity, carried to the extreme, becomes elegance.\" - Jon Franklin",
    "\"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.\" - Albert Einstein"
]

/**
 * Load a computer science related quote into the block quote
 * area at the bottom of the screen.
 */
function quote_select(){
    // "Randomly" select a quote from the array of quotes to display on the page
    document.getElementById("quote_text").innerHTML = quote_arr[Math.floor(Math.random() * quote_arr.length)];
}

// Listen for the initial page load, once it's loaded, add the quote
document.addEventListener("DOMContentLoaded", quote_select);