import {
  ProjectLookupServiceNetworkObjectName,
  ProjectLookupServiceType,
} from '@shared/models/project-lookup.model';
import networkObjectService from '@shared/services/network-object.service';

let networkObject: ProjectLookupServiceType;
let initializationPromise: Promise<void>;
async function initialize(): Promise<void> {
  if (!initializationPromise) {
    initializationPromise = new Promise<void>((resolve, reject) => {
      const executor = async () => {
        try {
          const localProjectLookupService =
            await networkObjectService.get<ProjectLookupServiceType>(
              ProjectLookupServiceNetworkObjectName,
            );
          if (!localProjectLookupService)
            throw new Error(
              `${ProjectLookupServiceNetworkObjectName} is not available as a network object`,
            );
          networkObject = localProjectLookupService;
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      executor();
    });
  }
  return initializationPromise;
}

const ProjectLookupService: ProjectLookupServiceType = {
  getMetadataForAllProjects: async () => {
    await initialize();
    return networkObject.getMetadataForAllProjects();
  },
  getMetadataForProject: async (projectId: string) => {
    await initialize();
    return networkObject.getMetadataForProject(projectId);
  },
};

export default ProjectLookupService;
