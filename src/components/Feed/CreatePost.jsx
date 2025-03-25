import React, { useState } from 'react'
import UserAvatar from '../atoms/UserAvatar'
import { loggedInUser } from '../../data/userData'
import IconText from '../molecules/IconText'
import Icon from '../atoms/Icon'
import { postAddOns } from '../../data/componentListsData'
import map from 'lodash/map' 

export default function CreatePost( {onNewPostCreated} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [postText, setPostText] = useState('');
    const [mediaFile, setMediaFile] = useState(null);

    function toggleModal(){
        setIsModalOpen(!isModalOpen);
        setPostText('');
        setMediaFile(null);
    }

    function handleFileChange(event){
        const file = event.target.files[0];
        if (file) {
            setMediaFile(file); 
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        if (!postText.trim()) return;
        
        const currentTime = Date.now();
        const mediaUrl = mediaFile ? URL.createObjectURL(mediaFile) : null;
        
        const newPost = {
            id: `post_${loggedInUser.id}_${currentTime}`,
            author: {
                id: loggedInUser.id,
                name: loggedInUser.name,
                headline: loggedInUser.headline,
                avatar: loggedInUser.avatar
            },
            content: postText,
            image: mediaUrl,
            timestamp: currentTime,
            likes: 0,
            comments: []
        };
        
        onNewPostCreated(newPost);
        toggleModal();
    }

    return (
        <>
            <div className='page-component create-post'>
                <div className='flex-row'>
                    <UserAvatar user={loggedInUser} className={'avatar-medium'}/>
                    <button className='start-post-btn' onClick={toggleModal}>Start a post</button>
                </div>

                <div className='flex-row post-add-ons'>
                    {map(postAddOns, postAddOnElement => <IconText 
                        iconName={postAddOnElement.iconName} 
                        size='20px' 
                        color={postAddOnElement.color} 
                        textContent={postAddOnElement.textContent}
                        key={postAddOnElement.key}/>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className='page-component post-modal'>
                    <div className='post-modal-header'>
                        <div className='flex-row'>
                            <UserAvatar user={loggedInUser} className={'avatar-medium'}/>
                            <div>
                                <h4 className='margin-0'>{loggedInUser.name}</h4>
                                <span className='light-text'>Post to Anyone</span>
                            </div>
                            <Icon iconName={'caret-down-fill'} size='15px' color='#666666'/>
                        </div>
                        <button className="post-modal-close-btn" onClick={toggleModal}>✕</button>
                    </div>

                    <form className='flex-col' onSubmit={handleSubmit}>
                        <textarea
                            placeholder="What do you want to talk about?"
                            value={postText}
                            onChange={(e) => setPostText(e.target.value)}
                            className='post-modal-textarea'
                            autoFocus
                        />
                        
                        <div className="modal-footer">
                            <label>
                                <input type="file" className='hidden' onChange={handleFileChange}/>
                                <Icon iconName={'image'} size='20px' color='#666666'/>
                                {mediaFile && (
                                    <span className='light-text' style={{margin:'8px'}}>{mediaFile.name}</span>
                                )}
                            </label>
                            
                            <button 
                                type="submit" 
                                className={`post-button ${!postText.trim() ? 'disabled-btn' : 'active-btn'}`}
                                disabled={!postText.trim()}
                                onClick={handleSubmit}
                            >
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}
