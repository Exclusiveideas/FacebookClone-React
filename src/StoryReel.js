import React from 'react'
import Story from './Story';
import './StoryReel.css';

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image="https://api.time.com/wp-content/uploads/2021/07/Jeff-Bezos-net-worth.jpg?quality=85&w=1024&h=628&crop=1"
                profileSrc="https://imageio.forbes.com/specials-images/imageserve/5f469ea85cc82fc8d6083f05/0x0.jpg?format=jpg&width=1200&fit=bounds"
                title="Jeff Bezos"
            />
            <Story
                image="https://www.aljazeera.com/wp-content/uploads/2021/01/2020-12-24T021752Z_1143390545_RC2ETK92EJHX_RTRMADP_3_CHINA-ANTGROUP.jpg?resize=1200%2C630"
                profileSrc="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2019/09/Jack-Ma.jpg"
                title="Jack Ma"
            />
            <Story
                image="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F02%2Fmark-zuckerberg-at-f8.jpg&q=60"
                profileSrc="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg"
                title="Mark Zuckerberg"
            />
            <Story
                image="https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/05/05/11/AlikoDangote1.jpg?width=1200"
                profileSrc="https://www.dangote.com/wp-content/uploads/2020/12/gpce_single.jpg"
                title="Aliko Dangote"
            />
            <Story
                image="https://d1e00ek4ebabms.cloudfront.net/production/cf9c891b-27f1-4e58-b764-0ef016b1eaeb.jpg"
                profileSrc="https://image.cnbcfm.com/api/v1/image/104864179-20150331-0014-1180.jpg?v=1525456366&w=929&h=523"
                title="Warren Buffet"
            />
        </div>
    )
}

export default StoryReel