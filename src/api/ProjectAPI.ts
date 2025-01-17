import api from "@/lib/axios";
import { Project, ProjectFormData, dashBoardProjectSchema } from "../types";
import { isAxiosError } from "axios";

export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return (data)
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }

    }
}
export async function getProjects() {
    try {
        const { data } = await api('/projects')
        const response = dashBoardProjectSchema.safeParse(data)
        if (response.success) {
            return response.data
        }

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }

    }
}

export async function getProjectById(id: Project['_id']) {
    try {
        const { data } = await api(`/projects/${id}`)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }

    }
}

type projectApiType = {
    formData: ProjectFormData
    projectId: Project['_id']
}
export async function updateProject({ formData, projectId }: projectApiType) {
    try {
        const { data } = await api.put<string>(`/projects/${projectId}`, formData)
        return data

    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }

    }
}