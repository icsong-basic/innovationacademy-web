import React from 'react'

interface Props {

}

export default function Layout({ }: Props) {
    return (
        <div className="page-top-padding" style={{ fontSize: '1.6rem' }}>
            <div className="container">
                <h1>Layout</h1>
            </div>
            <div className="container">
                <h2>Container</h2>
                <div className="container" style={{ backgroundColor: "rgba(0,0,0,0.1)" }}>
                    {`<div className="container"></div>`}
                    <div style={{ backgroundColor: "rgba(0,0,0,0.1)", height: "10rem" }}>
                        Inner area
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "rgba(255,0,0,0.1)", height: "10rem" }}>
                {`<div></div>`}
            </div>
            <>
                <div className="container">
                    <h2>Grid {`(가로해상도 > 768px 일때)`}</h2>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col md-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col md-1"/>`}
                            </div>
                            <div className="col md-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col md-1"/>`}
                            </div>
                            <div className="col md-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col md-1"/>`}
                            </div>
                            <div className="col md-2" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col md-2"/>`}
                            </div>
                            <div className="col md-3" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-3"/>`}
                            </div>
                            <div className="col md-4" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-4"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col md-12" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-12"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col md-8" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-8"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col md-8 margin-left-md-3" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-8 margin-left-md-3"/>`}
                            </div>
                            <div className="col md-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col md-1"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
            </>
            <>
                <div className="container">
                    <h2>Grid Mobile {`(가로해상도 <= 768px 일때)`}</h2>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col sm-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col sm-1"/>`}
                            </div>
                            <div className="col sm-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col sm-1"/>`}
                            </div>
                            <div className="col sm-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col sm-1"/>`}
                            </div>
                            <div className="col sm-3" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                {`<div className="col sm-3"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col sm-6" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col sm-6"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col sm-2" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col sm-2"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem', marginTop: '2rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col sm-2 margin-left-sm-3" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col sm-2 margin-left-sm-3"/>`}
                            </div>
                            <div className="col sm-1" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)' }}>
                                {`<div className="col sm-1"/>`}
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
            </>

            <>
                <div className="container">
                    <h2>Grid Responsive</h2>
                </div>
                <div className="container" style={{ backgroundColor: 'rgba(0,0,0,0.1', paddingTop: '1rem', paddingBottom: '1rem' }}>
                    <p>{`<div className="container">`}</p>
                    <div style={{ backgroundColor: 'rgba(0,255,0,0.1)' }}>
                        <p>{`<div className="row">`}</p>
                        <div className="row">
                            <div className="col md-4 sm-4" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                col md-4 sm-4
                            </div>
                            <div className="col md-8 sm-2" style={{ height: '10rem', background: 'rgba(255,0,0,0.1)', fontSize: '0.8rem' }}>
                                col md-8 sm-2
                            </div>
                        </div>
                        <p>{'</div>'}</p>
                    </div>
                    <p>{'</div>'}</p>
                </div>
            </>

        </div>
    )
}
