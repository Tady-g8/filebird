"use client";
import { useEffect } from "react";
import LeftButton from "./LeftButton";
import MainPostButton from "./MainPostButton";
import ProfileLeft from "./ProfileLeft";
import Collection from "./Collection";

export default function MainLeft() {

    useEffect(() => {
        const username = sessionStorage.getItem('username');

        if (username !== "") {
            console.log("fetching collections");

            fetch('http://localhost:4200/getCollections/' + username, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((Response) => Response.json()).then((data) => {
                console.log(data);
            });
        }
    }, []); 

    function createCollection(e) {
        e.preventDefault();
        const collectionName = document.getElementById('collectionName').value;

        const username = sessionStorage.getItem('username');

        if(collectionName !== '' && username !== '') {

            fetch('http://localhost:4200/createCollection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    collectionName: collectionName,
                    username: username
                })
            }) 
        }
    }

    function addCollection() {
        const addCollectionForm = document.getElementById('addCollectionForm');
        addCollectionForm.classList.toggle('hidden');
        addCollectionForm.classList.toggle('grid');
        addCollectionForm.classList.toggle('grid-cols-2');
    }

    function showCollections() {
        const collections = document.querySelector('.collections');
        collections.classList.toggle('hidden');
    }

    return (
        <div className="h-full mainLeftButtons ml-5 mr-5">

            <div className="leftSplitCont grid grid-cols-2 py-5">
                <div className="leftSplitFirst border-r border-slate-700">
                    <div className="place-content-start">
                        <LeftButton btnText="Home" btnIcon="home.svg" />
                        <LeftButton btnText="Trending" btnIcon="trend.svg" />
                        <LeftButton btnText="Spaces" btnIcon="rocket.svg" />
                        <LeftButton btnText="Collections" btnIcon="bookmark.svg" onClick={showCollections} />
                    </div>

                    <div className="collectionsCont">
                        <div className="collections hidden">
                            <button onClick={addCollection} className="italic text-slate-400 border border-black rounded-full flex items-center gap-2 px-4 max-w-96 mt-2 transition duration-200 hover:bg-gray-800 text-lg h-12">Add collection</button>
                            <form id="addCollectionForm" className="place-content-center flex-col gap-2 hidden ml-2">

                                <input className="mt-5 w-full border-b border-slate-500 bg-black" id="collectionName" type="text" placeholder="collection name" />
                                <button onClick={createCollection} className="italic text-slate-400 border border-black rounded-full flex items-center gap-2 px-4 max-w-96 mt-4 transition duration-200 hover:bg-gray-800 text-lg h-8">Add</button>

                            </form>
                        </div>
                    </div>
                </div>
                <div className="leftSplitSecond">
                </div>
            </div>
       
            <div className="MainLeftBottom place-content-end">
                <MainPostButton />
                <ProfileLeft />
            </div>

        </div>
    )
}