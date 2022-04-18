import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
        <Story image='https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68' profileSrc='' title='Roberto García' />
        <Story image='https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE' profileSrc='' title='David Martínez' />
        <Story image='https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w' profileSrc='' title='Marcelo Martínez' />
        <Story image='https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs' profileSrc='' title='Pepe González' />
        <Story image='https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg' profileSrc='' title='Humberto Durand' />
    </div>
  )
}

export default StoryReel