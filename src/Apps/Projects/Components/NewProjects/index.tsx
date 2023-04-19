import * as SolidJS from 'solid-js'

import './index.css'

const Component: SolidJS.Component = () => {
    const [IsActive, SetActive] = SolidJS.createSignal(false)

    const Element: SolidJS.JSX.Element = (
        <>
            <div class={'project'}>
                    <button
                        class={`toggle`}
                        onClick={(_) => {
                            SetActive(!IsActive())
                        }}
                        no-select={`true`}
                    >
                        <span>
                          Создать Новый проект
                        </span>
                    </button>
                <div class={'preview'}>
                    <div class={'head'}>
                        <div class={'title'}>
                            <span>
                                Проектная деятельность
                            </span>
                        </div>
                    </div>
                    <div class={'mainuser'}>
                        <div class={'name'}>
                            <span>
                                Федорова Софья Константиновна
                            </span>
                        </div>
                    </div>
                    <button
                        class={`toggle`}
                        onClick={(_) => {
                            SetActive(!IsActive())
                        }}
                        no-select={`true`}
                    >
                        <span>
                          Просмотр заявок
                        </span>
                    </button>
                </div>
                <div class={'preview'}>
                    <div class={'head'}>
                        <div class={'title'}>
                            <span>
                                Проектная деятельность
                            </span>
                        </div>
                    </div>
                    <div class={'mainuser'}>
                        <div class={'name'}>
                            <span>
                                Федорова Софья Константиновна
                            </span>
                        </div>
                    </div>
                    <button
                        class={`toggle`}
                        onClick={(_) => {
                            SetActive(!IsActive())
                        }}
                        no-select={`true`}
                    >
                        <span>
                          Просмотр заявок
                        </span>
                    </button>
                </div>
                <div class={'preview'}>
                    <div class={'head'}>
                        <div class={'title'}>
                            <span>
                                Проектная деятельность
                            </span>
                        </div>
                    </div>
                    <div class={'mainuser'}>
                        <div class={'name'}>
                            <span>
                                Федорова Софья Константиновна
                            </span>
                        </div>
                    </div>
                    <button
                        class={`toggle`}
                        onClick={(_) => {
                            SetActive(!IsActive())
                        }}
                        no-select={`true`}
                    >
                        <span>
                          Просмотр заявок
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
    return Element
}

export default Component