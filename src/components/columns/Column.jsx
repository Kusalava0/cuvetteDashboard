import React, { useState } from 'react'
import './Column.css'
import ProgressBar from '@ramonak/react-progress-bar'
import DoughnutChart from '../charts/Doughnut';
import ComparisonGraph from '../charts/ComparisonGraph';

const Column = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updatedRank, setUpdatedRank] = useState('12,890');
    const [updatedPercentile, setUpdatedPercentile] = useState('37');
    const [updatedScore, setUpdatedScore] = useState('07');

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const updateValues = () => {
        closeModal();
    };
    const data = [65, 72, 80, 68, 75, 78, 85];
    return (
        <>
            <section>
                <div className='container'>
                    Skill Test
                </div>
            </section>
            <section className='test-details'>
                <div>

                    <div className='details' style={{ width: "45vw" }}>
                        <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem", alignItems: "center" }}>
                            <img src='/images/html5.png' />
                            <div className='desc'>
                                <strong>Hyper Text Markup Language</strong>
                                <p className='subtext'>Questions: 08 | Duration: 15 mins | Submitted on 26 October 2023</p>
                            </div>
                        </div>
                        <button className='btn' onClick={openModal}>Update</button>
                    </div>
                    <div className='statistics' style={{ width: "45vw" }}>
                        <strong>Quick Statistics</strong>

                        <div className='desc'>
                            <div className='stat-container'>
                                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>

                                    <div>
                                        <img src='/images/rank.png' />
                                    </div>
                                    <div className='stat-items'>
                                        <strong>{updatedRank}</strong>
                                        <p className='subtext'>YOUR RANK</p>
                                    </div>
                                </div>
                                <hr className='divider' />
                                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>

                                    <div>
                                        <img src='/images/percent.png' />
                                    </div>
                                    <div className='stat-items'>
                                        <strong>{updatedPercentile}%</strong>
                                        <p className='subtext'>PERCENTILE</p>
                                    </div>
                                </div>
                                <hr className='divider' />
                                <div style={{ display: "flex", flexDirection: "row", gap: "1.5rem" }}>
                                    <div>
                                        <img src='/images/correct.png' />
                                    </div>
                                    <div className='stat-items'>
                                        <strong>{updatedScore} / 15</strong>
                                        <p className='subtext'>YOUR RANK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='details' style={{flexDirection: "column", width:'45vw'}}>
                        <strong>Comparison Graph</strong>
                        <div style={{display: "flex", flexDirection:"row",}}>

                        <p><strong>You scored {updatedPercentile}% percentile</strong> which is lower than the
                        average percentile 72% of all the engineers who took this assignment.
                        </p>
                        <div style={{width:"40%", textAlign:"end"}}>
                            <img src='/images/compare.png'/>
                        </div>
                        </div>

                        <ComparisonGraph data={data} userPercentile={updatedPercentile} />
                    </div>
                </div>

                <div>
                    <div className='syllabus-analysis'>
                        <strong>Syllabus wise Analysis</strong>

                        <div className='syllabus-items'>
                            <div>
                                <p>HTML Tools, Forms, History</p>
                                <ProgressBar completed={80} height='14px' bgColor='#438AF6' animateOnRender={true} labelAlignment='outside' labelColor='#438AF6' margin='0 6rem 0 0' />
                            </div>
                            <div>
                                <p>Tags & References in HTML</p>
                                <ProgressBar completed={60} height='14px' bgColor='#FF9142' animateOnRender={true} labelAlignment='outside' labelColor='#FF9142' margin='0 6rem 0 0' />
                            </div>
                            <div>
                                <p>Tables & CSS Basics</p>
                                <ProgressBar completed={24} height='14px' bgColor='#FB5E5E' animateOnRender={true} labelAlignment='outside' labelColor='#FB5E5E' margin='0 6rem 0 0' />
                            </div>
                            <div>
                                <p>Tables & CSS Basics</p>
                                <ProgressBar completed={96} height='14px' bgColor='#2EC971' animateOnRender={true} labelAlignment='outside' labelColor='#2EC971' margin='0 6rem 0 0' />
                            </div>
                        </div>
                    </div>
                    <div className='syllabus-analysis'>
                        <strong>Question Analysis</strong>

                        <p><strong>You scored {updatedScore} questions correct out of 15.</strong> However it still needs some improvements.</p>
                        <div style={{ display: "flex", justifyContent: "space-around", width: "100%", height:"300px" }}>
                            <DoughnutChart answers={updatedScore} />
                        </div>
                    </div>
                </div>

            </section>
            {isModalOpen && (
                <dialog open className="modal-slide-in">
                    <div className="modal-content">
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

                            <h2>Update Scores</h2> <div><img src='/images/html5.png' /></div>
                        </div>

                        <div className="styled-label">
                            <div className="label-number">1</div>
                            <div className='label-div'>

                                <label htmlFor="rank">Update your rank:</label>
                                <input
                                    type="text"
                                    id="rank"
                                    style={{ padding: "0.75rem", borderColor: "#142683", borderRadius: "5px" }}
                                    value={updatedRank}
                                    onChange={(e) => setUpdatedRank(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className="styled-label">
                            <div className="label-number">2</div>
                            <div className='label-div'>

                                <label htmlFor="percentile">Update your percentile:</label>
                                <input
                                    type="text"
                                    id="percentile"
                                    style={{ padding: "0.75rem", borderColor: "#142683", borderRadius: "5px" }}
                                    value={updatedPercentile}
                                    onChange={(e) => setUpdatedPercentile(e.target.value)}
                                />
                            </div>
                        </div>


                        <div className="styled-label">
                            <div className="label-number">3</div>
                            <div className='label-div'>

                                <label htmlFor="score">Update your score (out of 15):</label>
                                <input
                                    type="text"
                                    id="score"
                                    style={{ padding: "0.75rem", borderColor: "#142683", borderRadius: "5px" }}
                                    value={updatedScore}
                                    onChange={(e) => setUpdatedScore(e.target.value)}
                                />
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <button className='btn' onClick={closeModal}>Cancel</button>
                            <button className='btn' onClick={updateValues}>Save →</button>
                        </div>
                    </div>
                </dialog>
            )}

        </>
    )
}

export default Column