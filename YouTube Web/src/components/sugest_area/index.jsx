import "./index.css";
import { tags } from "./tag_items";
import { videos } from "./video_item";

export const SugestArea = ()=>
{
    
    return (
        <section className="sugest-area">
            <section className="tag-sugest-area">
            {
                tags.map((tag)=>{
                    return <span className="tag-item">{tag}</span>
                })
            }
            </section>

            <section className="video-sugest-area">
            {
                videos.map((video)=>
                {
                    return (
                        <article key={video._id}>
                            <img id="thumb" src={video.thumb_url_img}/>
                            <div className="video-info">
                                <img id="profile" src={video.channel_profile_img}/>

                                <div className="data">
                                    <h1>{video.video_title}</h1>
                                    <h2>{video.chanel_name}</h2>
                                    <h2>{video.total_views} visualizações | há {video.launch_time} </h2>
                                </div>
                            </div>

                        </article>
                    )
                })
            }
            </section>

        </section>
    )
}