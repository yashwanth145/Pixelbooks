"use client";
import styles from "./sidebar.module.css"
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getusers, deleteuser} from "../actions";
import {Astrologygetusers,ArtUser,AdventureUser,AnthologyUser,BiographyUser,BusinessUser,ClassicUser,CookUser,CraftsUser,CrimeUser,EconomicsUser,EnvironmentalUser,FantasyUser,FinanceUser,GeographyUser,HealthUser,HistoricalUser,HorrorUser,JournalismUser,LawUser,MilitaryUser,MysteryUser,NonFictionUser,PhilosophyUser,PsychologyUser,RelationShipUser,RomanceUser,ScienceFictionUser,ScienceUser,SportsUser,TechnologyUser,TravelUser,WarUser,YoungAdultFantasyUser} from "../actions"
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar"
export default function Dashboard() {
  let auth;
  try {
    auth = useAuth(); 
  } catch (error) {
    console.error("Auth error:", error);
    return <p>Loading...</p>;
  }

  const router = useRouter();
  const [users, setUsers] = useState([]);

  if (!auth) return <p>Loading...</p>;

  const { user, loading } = auth;

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const data = await getusers();
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }


  async function AtroUsers(name) {
    try {
      const data = await Astrologygetusers(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function ArtUsers(name) {
    try {
      const data = await ArtUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function AnthologyUsers(name) {
    try {
      const data = await AnthologyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function AdventureUsers(name) {
    try {
      const data = await AdventureUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function BiographyUsers(name) {
    try {
      const data = await BiographyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function BusinessUsers(name) {
    try {
      const data = await BusinessUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function CraftsUsers(name) {
    try {
      const data = await CraftsUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function ClassicUsers(name) {
    try {
      const data = await ClassicUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function CookUsers(name) {
    try {
      const data = await CookUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function CrimeUsers(name) {
    try {
      const data = await CrimeUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function EconomicsUsers(name) {
    try {
      const data = await EconomicsUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function EnvironmentalismUsers(name) {
    try {
      const data = await EnvironmentalUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function FantasyUsers(name) {
    try {
      const data = await FantasyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function FinanceUsers(name) {
    try {
      const data = await FinanceUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function GeographyUsers(name) {
    try {
      const data = await GeographyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function HistoricalFictionUsers(name) {
    try {
      const data = await HistoricalUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function HealthUsers(name) {
    try {
      const data = await HealthUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function HorrorUsers(name) {
    try {
      const data = await HorrorUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  
  async function JournalismUsers(name) {
    try {
      const data = await JournalismUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function LawUsers(name) {
    try {
      const data = await LawUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function MilitaryUsers(name) {
    try {
      const data = await MilitaryUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function MysteryUsers(name) {
    try {
      const data = await MysteryUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function NonFictionUsers(name) {
    try {
      const data = await NonFictionUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function PhilosophyUsers(name) {
    try {
      const data = await PhilosophyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function PoetryUsers(name) {
    try {
      const data = await PoetryUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function PoliticsUsers(name) {
    try {
      const data = await PoliticsUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function PsychologyUsers(name) {
    try {
      const data = await PsychologyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function RelationshipsUsers(name) {
    try {
      const data = await RelationShipUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function RomanceUsers(name) {
    try {
      const data = await RomanceUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function ScienceUsers(name) {
    try {
      const data = await ScienceUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function ScienceFictionUsers(name) {
    try {
      const data = await ScienceFictionUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function SportsUsers(name) {
    try {
      const data = await SportsUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function TechnologyUsers(name) {
    try {
      const data = await TechnologyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function TravelUsers(name) {
    try {
      const data = await TravelUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function WarUsers(name) {
    try {
      const data = await WarUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
  async function YoungAdultFantasyUsers(name) {
    try {
      const data = await YoungAdultFantasyUser(name);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

 

  async function handleDeleteUser(userEmail) {
    await deleteuser(userEmail);
    router.push('/buy');
    await fetchUsers();
  }


  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) return <p>Loading...</p>;
  if (!user) return null;

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="sidebar bg-light vh-100 p-3" style={{ minWidth: "250px" }}>
        
<div className={styles.sidebar}>
      {/* Add enough content to make it scrollable */}
      <button className="btn btn-danger m-2" onClick={() => AtroUsers("Astrology")}>Astrology</button>
  <button className="btn btn-danger m-2" onClick={() => ArtUsers("Art")}>Art</button>
  <button className="btn btn-danger m-2" onClick={() => AnthologyUsers("Anthology")}>Anthology</button>
  <button className="btn btn-danger m-2" onClick={() => AdventureUsers("Adventure")}>Adventure</button>
  <button className="btn btn-danger m-2" onClick={() => BiographyUsers("Biography")}>Biography</button>
  <button className="btn btn-danger m-2" onClick={() => BusinessUsers("Business")}>Business</button>
  <button className="btn btn-danger m-2" onClick={() => CraftsUsers("Crafts")}>Crafts</button>
  <button className="btn btn-danger m-2" onClick={() => ClassicUsers("Classic")}>Classic</button>
  <button className="btn btn-danger m-2" onClick={() => CookUsers("Cook")}>Cook</button>
  <button className="btn btn-danger m-2" onClick={() => CrimeUsers("Crime")}>Crime</button>
  <button className="btn btn-danger m-2" onClick={() => EconomicsUsers("Economics")}>Economics</button>
  <button className="btn btn-danger m-2" onClick={() => EnvironmentalismUsers("Environmentalism")}>Environmentalism</button>
  <button className="btn btn-danger m-2" onClick={() => FantasyUsers("Fantasy")}>Fantasy</button>
  <button className="btn btn-danger m-2" onClick={() => FinanceUsers("Finance")}>Finance</button>
  <button className="btn btn-danger m-2" onClick={() => GeographyUsers("Geography")}>Geography</button>
  <button className="btn btn-danger m-2" onClick={() => HistoricalFictionUsers("Historical Fiction")}>Historical Fiction</button>
  <button className="btn btn-danger m-2" onClick={() => HealthUsers("Health & Wellness")}>Health & Wellness</button>
  <button className="btn btn-danger m-2" onClick={() => HorrorUsers("Horror")}>Horror</button>
  <button className="btn btn-danger m-2" onClick={() => JournalismUsers("Journalism")}>Journalism</button>
  <button className="btn btn-danger m-2" onClick={() => LawUsers("Law")}>Law</button>
  <button className="btn btn-danger m-2" onClick={() => MilitaryUsers("Military")}>Military</button>
  <button className="btn btn-danger m-2" onClick={() => MysteryUsers("Mystery")}>Mystery</button>
  <button className="btn btn-danger m-2" onClick={() => NonFictionUsers("Non-fiction")}>Non-fiction</button>
  <button className="btn btn-danger m-2" onClick={() => PhilosophyUsers("Philosophy")}>Philosophy</button>
  <button className="btn btn-danger m-2" onClick={() => PoetryUsers("Poetry")}>Poetry</button>
  <button className="btn btn-danger m-2" onClick={() => PoliticsUsers("Politics")}>Politics</button>
  <button className="btn btn-danger m-2" onClick={() => PsychologyUsers("Psychology")}>Psychology</button>
  <button className="btn btn-danger m-2" onClick={() => RelationshipsUsers("Relationships")}>Relationships</button>
  <button className="btn btn-danger m-2" onClick={() => RomanceUsers("Romance")}>Romance</button>
  <button className="btn btn-danger m-2" onClick={() => ScienceUsers("Science")}>Science</button>
  <button className="btn btn-danger m-2" onClick={() => ScienceFictionUsers("Science Fiction")}>Science Fiction</button>
  <button className="btn btn-danger m-2" onClick={() => SportsUsers("Sports")}>Sports</button>
  <button className="btn btn-danger m-2" onClick={() => TechnologyUsers("Technology")}>Technology</button>
  <button className="btn btn-danger m-2" onClick={() => TravelUsers("Travel")}>Travel</button>
  <button className="btn btn-danger m-2" onClick={() => WarUsers("War")}>War</button>
  <button className="btn btn-danger m-2" onClick={() => YoungAdultFantasyUsers("Young Adult Fantasy")}>Young Adult Fantasy</button>
    </div>      
    </div>

      {/* Main Content */}
      <Navbar/>
      <div className="container-fluid flex-grow-1 mt-4">
        

        {/* User Cards */}
        <div className="row g-4 mt-[100px]">
          {users.map((user) => (
            <div key={user.title} className="col-md-4">
              <div className="card shadow-sm text-center mt-[100px]">
              <h5 className="card-title">{user.title}</h5>
                <Image
                  src={`${user.image}`}
                  alt="User Profile"
                  width={100}
                  height={100}
                  className="card-img-top mx-auto mt-3"
                />
                <div className="card-body">
                  <h5 className="card-title">{user.author}</h5>
                  <p className="card-text">{user.category}</p>
                  <p className="card-text">{user.publisher}</p>
                  <p className="card-text">{user.pages}</p>
                  <p className="card-text">{user.language}</p>
                  <p className="card-text">{user.price}</p>
                  <p className="card-text">{user.status}</p>
                  <p className="card-text">{user.delivary}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(user.email)} 
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
