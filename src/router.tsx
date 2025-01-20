import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppLayout } from '@/layouts/AppLayout'
import { DashboardView } from '@/views/DashboardView'
import CreateProjectView from './views/projects/CreateProjectView'
import EditProjectView from './views/projects/EditProjectView'
import { ProjectDetailView } from './views/projects/ProjectDetailView'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path='/' element={<DashboardView />} index />
                    <Route path='project/create' element={<CreateProjectView />} />
                    <Route path='project/:projectId' element={<ProjectDetailView />} />
                    <Route path='project/:projectId/edit' element={<EditProjectView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}