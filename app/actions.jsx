"use server"
import { connectDB } from "../lib/db"
export async function createuser(Image, Title,Author,Category,Publisher,Publication_date,Pages,Language,Price,Status,Delivary) {
    try {
        const db = await connectDB();
        await db.execute("INSERT INTO books VALUES (?, ? , ? , ? , ? ,? ,? , ? ,? , ? , ?)", [Image, Title,Author,Category,Publisher,Publication_date,Pages,Language,Price,Status,Delivary]);
        db.end();
    } catch (error) {
        console.error("Error creating user:", error);
    }
}

export async function deleteuser(Title) {
    try {
        const db = await connectDB();
        await db.execute("DELETE FROM books WHERE `User` = ?", [Title]);
        db.end();
    } catch (error) {
        console.error("Error deleting user:", error);
    }
}

export async function getusers() {
    try {
        const db = await connectDB();
        const [rows] = await db.query("SELECT * FROM books"); // ✅ Use `query()` instead of `execute()`
        db.end();

        return rows.map(user => ({
            image: user.Image,      // Ensure these match your table column names
            title: user.Title,  
            author: user.Author,
            category:user.Category,
            publisher:user.Publisher,
            publication_date:user.Publication_date,
            pages:user.Pages,
            language:user.Language,
            price:user.Price,
            status:user.Status,
            delivary:user.Delivary
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}



export async function Astrologygetusers(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function ArtUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function AnthologyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function AdventureUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function BiographyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function BusinessUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function CraftsUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function ClassicUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function CookUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function CrimeUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}


export async function EconomicsUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}


export async function EnvironmentalUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}


export async function FantasyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function FinanceUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function GeographyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function HistoricalUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function HealthUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function HorrorUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function JournalismUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function LawUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function MilitaryUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function MysteryUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function NonFictionUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function PhilosophyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function PsychologyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function RomanceUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function ScienceUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function ScienceFictionUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function SportsUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function TechnologyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function TravelUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function WarUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
export async function RelationShipUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function YoungAdultFantasyUser(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

export async function randombooks() {
    try {
        const db = await connectDB();
        const [rows] = await db.query("SELECT * FROM books ORDER BY RAND() LIMIT 8"); // ✅ Use `query()` instead of `execute()`
        db.end();

        return rows.map(user => ({
            image: user.Image,      // Ensure these match your table column names
            title: user.Title,  
            author: user.Author,
            category:user.Category,
            publisher:user.Publisher,
            publication_date:user.Publication_date,
            pages:user.Pages,
            language:user.Language,
            price:user.Price,
            status:user.Status,
            delivary:user.Delivary
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}


export async function Search(category) {
    try {
        const db = await connectDB();
        const [rows] = await db.query(
            `SELECT * FROM books WHERE Category LIKE ?`, 
            [`%${category}%`]  // ✅ Parameterized query to prevent SQL injection
        );
        db.end();

        return rows.map(user => ({
            image: user.Image,      
            title: user.Title,  
            author: user.Author,
            category: user.Category,
            publisher: user.Publisher,
            publication_date: user.Publication_date,
            pages: user.Pages,
            language: user.Language,
            price: user.Price,
            status: user.Status,
            delivery: user.Delivery  // Fixed typo from "delivary" to "delivery"
        })); 
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}