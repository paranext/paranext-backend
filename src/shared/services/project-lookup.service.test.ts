/* eslint-disable no-type-assertion/no-type-assertion */
import {
  ProjectDataProviderFactoryMetadataInfo,
  ProjectMetadata,
  ProjectMetadataWithoutFactoryInfo,
} from '@shared/models/project-metadata.model';
import {
  filterProjectsMetadata,
  getMinimalMatchPdpFactoryId,
  testingProjectLookupService,
} from '@shared/services/project-lookup.service';
import { ProjectMetadataFilterOptions } from '@shared/models/project-lookup.service-model';
import networkObjectService from '@shared/services/network-object.service';
import networkObjectStatusService from '@shared/services/network-object-status.service';
import IProjectDataProviderFactory, {
  PDP_FACTORY_OBJECT_TYPE,
} from '@shared/models/project-data-provider-factory.interface';
import { NetworkObjectDetails } from '@shared/models/network-object.model';
import { ProjectInterfaces } from 'papi-shared-types';

jest.mock('@shared/services/network-object.service', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
  },
}));

jest.mock('@shared/services/network-object-status.service', () => ({
  __esModule: true,
  default: {
    getAllNetworkObjectDetails: jest.fn(),
  },
}));

beforeEach(() => {
  // @ts-expect-error ts(2339) TypeScript doesn't realize this is a jest function :(
  networkObjectService.get.mockImplementation(() => {
    throw new Error('networkObjectService.get has no test implementation');
  });
  // @ts-expect-error ts(2339) TypeScript doesn't realize this is a jest function :(
  networkObjectStatusService.getAllNetworkObjectDetails.mockImplementation(() => {
    throw new Error(
      'networkObjectStatusService.getAllNetworkObjectDetails has no test implementation',
    );
  });
});

describe('Metadata generation:', () => {
  const testProjectId = 'test-project';
  const expectedTestProjectInterfaces: ProjectInterfaces[] = [
    'platform.placeholder',
    'platform.notesOnly',
    'ParatextStandard',
    'helloWorld',
  ];
  const expectedTest2ProjectInterfaces: ProjectInterfaces[] = [
    'ParatextStandard',
    'platform.notesOnly',
  ];
  const test2ProjectId = 'test-2-project';
  const testPDPFInfo: Record<string, Partial<NetworkObjectDetails>> = {
    'test-0-pdpf': {
      objectType: PDP_FACTORY_OBJECT_TYPE,
    },
    'test-1-pdpf': {
      objectType: PDP_FACTORY_OBJECT_TYPE,
    },
    'test-2-pdpf': {
      objectType: PDP_FACTORY_OBJECT_TYPE,
    },
    'test-3-pdpf': {
      objectType: PDP_FACTORY_OBJECT_TYPE,
    },
    'test-4-pdpf': {
      objectType: PDP_FACTORY_OBJECT_TYPE,
    },
  };
  const testPDPFs: Record<string, Partial<IProjectDataProviderFactory>> = {
    'test-2-pdpf': {
      async getAvailableProjects(): Promise<ProjectMetadataWithoutFactoryInfo[]> {
        return [
          {
            id: testProjectId,
            name: 'Test',
            projectInterfaces: ['platform.placeholder', 'platform.notesOnly', 'helloWorld'],
          },
        ];
      },
    },
    'test-1-pdpf': {
      async getAvailableProjects(): Promise<ProjectMetadataWithoutFactoryInfo[]> {
        return [
          {
            id: testProjectId,
            name: 'Test',
            projectInterfaces: ['platform.placeholder', 'platform.notesOnly'],
          },
          {
            id: test2ProjectId,
            name: 'Test2',
            projectInterfaces: ['ParatextStandard', 'platform.notesOnly'],
          },
        ];
      },
    },
    'test-3-pdpf': {
      async getAvailableProjects(): Promise<ProjectMetadataWithoutFactoryInfo[]> {
        return [
          {
            id: testProjectId,
            name: 'Test',
            projectInterfaces: ['platform.placeholder', 'platform.notesOnly', 'ParatextStandard'],
          },
        ];
      },
    },
    'test-0-pdpf': {
      async getAvailableProjects(): Promise<ProjectMetadataWithoutFactoryInfo[]> {
        return [{ id: testProjectId, name: 'Test', projectInterfaces: ['platform.placeholder'] }];
      },
    },
    'test-4-pdpf': {
      async getAvailableProjects(): Promise<ProjectMetadataWithoutFactoryInfo[]> {
        return [
          { id: testProjectId, name: 'Test', projectInterfaces: ['platform.notesOnly'] },
          { id: test2ProjectId, name: 'Test2', projectInterfaces: ['platform.notesOnly'] },
        ];
      },
    },
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // @ts-expect-error ts(2339) TypeScript doesn't realize this is a jest function :(
    networkObjectStatusService.getAllNetworkObjectDetails.mockImplementation(() => testPDPFInfo);
    // @ts-expect-error ts(2339) TypeScript doesn't realize this is a jest function :(
    networkObjectService.get.mockImplementation(
      (networkObjectId: string) => testPDPFs[networkObjectId],
    );
  });

  describe('compareProjectDataProviderFactoryMetadataInfoMinimalMatch', () => {
    test('gets the PDP Factory Id that implements projectInterface and as few others as possible', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(
        undefined,
        'platform.placeholder',
      );

      // Check project 1
      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      const pdpfInfoValuesSorted = (
        Object.values(testProjectMetadata.pdpFactoryInfo)
          // Just get the ones that have the right `projectInterface` (and get rid of undefined)
          .filter(
            (pdpfInfo) => pdpfInfo && pdpfInfo.projectInterfaces.includes('platform.placeholder'),
          ) as ProjectDataProviderFactoryMetadataInfo[]
      ).sort(testingProjectLookupService.compareProjectDataProviderFactoryMetadataInfoMinimalMatch);

      expect(pdpfInfoValuesSorted.length).toBe(4);
      expect(pdpfInfoValuesSorted[0].projectInterfaces).toEqual(['platform.placeholder']);
      expect(pdpfInfoValuesSorted[1].projectInterfaces).toEqual([
        'platform.placeholder',
        'platform.notesOnly',
      ]);
      expect(pdpfInfoValuesSorted[2].projectInterfaces).toEqual([
        'platform.placeholder',
        'platform.notesOnly',
        'helloWorld',
      ]);
      expect(pdpfInfoValuesSorted[3].projectInterfaces).toEqual([
        'platform.placeholder',
        'platform.notesOnly',
        'ParatextStandard',
      ]);
    });
  });

  describe('getMinimalMatchPdpFactoryInfo', () => {
    test('returns sort values to order by minimally matching to the projectInterface', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(
        undefined,
        'platform.placeholder',
      );

      // Check project 1
      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      const minimalMatchIdPossiblyUndefined = getMinimalMatchPdpFactoryId(
        testProjectMetadata,
        'platform.placeholder',
      );
      expect(minimalMatchIdPossiblyUndefined).toBeDefined();
      const minimalMatchId = minimalMatchIdPossiblyUndefined as string;

      expect(minimalMatchId).toBe('test-0-pdpf');
      expect(testProjectMetadata.pdpFactoryInfo[minimalMatchId]?.projectInterfaces).toEqual([
        'platform.placeholder',
      ]);
    });
  });

  describe('internalGetMetadata', () => {
    test('gets all aggregated ProjectMetadata when not filtered', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata();

      expect(projectsMetadata.length).toBe(2);

      // Check project 1
      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      // Should be provided by the right number of pdpfs
      expect(Object.entries(testProjectMetadata.pdpFactoryInfo).length).toBe(5);

      // `projectInterface`s should be a combination of all available `projectInterface`s
      expect(testProjectMetadata.projectInterfaces.length).toEqual(
        expectedTestProjectInterfaces.length,
      );
      expectedTestProjectInterfaces.forEach((projectInterface) =>
        expect(testProjectMetadata.projectInterfaces).toContain(projectInterface),
      );

      // Check project 2
      const test2ProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === test2ProjectId,
      );
      expect(test2ProjectMetadataPossiblyUndefined).toBeDefined();
      const test2ProjectMetadata = test2ProjectMetadataPossiblyUndefined as ProjectMetadata;

      // Should be provided by the right number of pdpfs
      expect(Object.entries(test2ProjectMetadata.pdpFactoryInfo).length).toBe(2);

      // `projectInterface`s should be the right `projectInterface`s
      expect(test2ProjectMetadata.projectInterfaces.length).toEqual(
        expectedTest2ProjectInterfaces.length,
      );
      expectedTest2ProjectInterfaces.forEach((projectInterface) =>
        expect(test2ProjectMetadata.projectInterfaces).toContain(projectInterface),
      );
    });

    test('deep clones resulting ProjectMetadata so future calls are not affected', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(testProjectId);

      // First time checking to make sure everything is consistent for later
      expect(projectsMetadata.length).toBe(1);
      expect(projectsMetadata[0].projectInterfaces.length).toBe(
        expectedTestProjectInterfaces.length,
      );

      // Change the values
      projectsMetadata[0].id = 'FAKE ID';
      projectsMetadata[0].projectInterfaces.push('FAKE PROJECT INTERFACE' as ProjectInterfaces);

      // Get the same ProjectMetadata again
      const newProjectsMetadata =
        await testingProjectLookupService.internalGetMetadata(testProjectId);

      // Check the same conditions to make sure nothing changed
      expect(newProjectsMetadata.length).toBe(1);
      expect(newProjectsMetadata[0].projectInterfaces.length).toBe(
        expectedTestProjectInterfaces.length,
      );
    });

    test('gets just one ProjectMetadata when filtered by projectId', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(testProjectId);

      expect(projectsMetadata.length).toBe(1);

      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      // Should be provided by the right number of pdpfs
      expect(Object.entries(testProjectMetadata.pdpFactoryInfo).length).toBe(5);
    });

    test('gets the whole ProjectMetadata when filtered by projectInterface', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(
        undefined,
        'platform.placeholder',
      );

      expect(projectsMetadata.length).toBe(1);

      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      // `projectInterface`s should be a combination of all available `projectInterface`s
      expect(testProjectMetadata.projectInterfaces.length).toEqual(
        expectedTestProjectInterfaces.length,
      );
      expectedTestProjectInterfaces.forEach((projectInterface) =>
        expect(testProjectMetadata.projectInterfaces).toContain(projectInterface),
      );

      // Each entry in pdpfInfo should have the `projectInterface`s provided by that pdpf
      // Notably, test-4-pdpf doesn't have platform.placeholder, but it is still there because the
      // project has `platform.placeholder` and we're looking for all info about all projects that
      // match
      expect(testProjectMetadata.pdpFactoryInfo).toEqual({
        'test-2-pdpf': {
          projectInterfaces: ['platform.placeholder', 'platform.notesOnly', 'helloWorld'],
        },
        'test-1-pdpf': { projectInterfaces: ['platform.placeholder', 'platform.notesOnly'] },
        'test-3-pdpf': {
          projectInterfaces: ['platform.placeholder', 'platform.notesOnly', 'ParatextStandard'],
        },
        'test-0-pdpf': { projectInterfaces: ['platform.placeholder'] },
        'test-4-pdpf': { projectInterfaces: ['platform.notesOnly'] },
      });
    });

    test('gets partial ProjectMetadata when filtered by pdpFactoryId', async () => {
      const projectsMetadata = await testingProjectLookupService.internalGetMetadata(
        undefined,
        undefined,
        'test-1-pdpf',
      );

      expect(projectsMetadata.length).toBe(2);

      // Check project 1
      const testProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === testProjectId,
      );
      expect(testProjectMetadataPossiblyUndefined).toBeDefined();
      const testProjectMetadata = testProjectMetadataPossiblyUndefined as ProjectMetadata;

      // `projectInterface`s should be just the `projectInterface`s from this pdpf
      const expectedTestProjectInterfacesOnePDPF = ['platform.placeholder', 'platform.notesOnly'];
      expect(testProjectMetadata.projectInterfaces.length).toEqual(
        expectedTestProjectInterfacesOnePDPF.length,
      );
      expectedTestProjectInterfacesOnePDPF.forEach((projectInterface) =>
        expect(testProjectMetadata.projectInterfaces).toContain(projectInterface),
      );

      // Each entry in pdpfInfo should have only the `projectInterface`s provided by this pdpf
      expect(testProjectMetadata.pdpFactoryInfo).toEqual({
        'test-1-pdpf': { projectInterfaces: ['platform.placeholder', 'platform.notesOnly'] },
      });

      // Check project 2
      const test2ProjectMetadataPossiblyUndefined = projectsMetadata.find(
        (projectMetadata) => projectMetadata.id === test2ProjectId,
      );
      expect(test2ProjectMetadataPossiblyUndefined).toBeDefined();
      const test2ProjectMetadata = test2ProjectMetadataPossiblyUndefined as ProjectMetadata;

      // `projectInterface`s should be just the `projectInterface`s from this pdpf
      const expectedTest2ProjectInterfacesOnePDPF = ['ParatextStandard', 'platform.notesOnly'];
      expect(test2ProjectMetadata.projectInterfaces.length).toEqual(
        expectedTest2ProjectInterfacesOnePDPF.length,
      );
      expectedTest2ProjectInterfacesOnePDPF.forEach((projectInterface) =>
        expect(test2ProjectMetadata.projectInterfaces).toContain(projectInterface),
      );

      // Each entry in pdpfInfo should have only the `projectInterface`s provided by this pdpf
      expect(test2ProjectMetadata.pdpFactoryInfo).toEqual({
        'test-1-pdpf': { projectInterfaces: ['ParatextStandard', 'platform.notesOnly'] },
      });
    });

    test('only calls the specific pdpFactory when filtered by pdpFactoryId', async () => {
      const pdpfId = 'test-1-pdpf';
      await testingProjectLookupService.internalGetMetadata(undefined, undefined, pdpfId);

      expect(networkObjectService.get).toHaveBeenCalledTimes(1);
      expect(networkObjectService.get).toHaveBeenCalledWith('test-1-pdpf');
    });
  });
});

describe('filterProjectsMetadata', () => {
  const projectsMetadata: ProjectMetadata[] = [
    {
      id: 'asdf',
      name: 'fdsa',
      projectInterfaces: ['helloWorld', 'platform.notesOnly'],
      pdpFactoryInfo: {
        test1: { projectInterfaces: ['platform.notesOnly'] },
        test4: { projectInterfaces: ['helloWorld'] },
      },
    },
    {
      id: 'asdfg',
      name: 'fdsag',
      projectInterfaces: ['ParatextStandard', 'platform.notesOnly'],
      pdpFactoryInfo: {
        test2: { projectInterfaces: ['ParatextStandard', 'platform.notesOnly'] },
        test4: { projectInterfaces: ['ParatextStandard'] },
      },
    },
    {
      id: 'asdfgh',
      name: 'fdsagh',
      projectInterfaces: ['platform.placeholder'],
      pdpFactoryInfo: { test3: { projectInterfaces: ['platform.placeholder'] } },
    },
  ];

  test('should return a shallow clone if there are no filters', () => {
    const options: ProjectMetadataFilterOptions = {};

    const filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata).not.toBe(projectsMetadata);
    expect(filteredMetadata).toEqual(projectsMetadata);
  });

  test('should remove ids matching excludeProjectIds', () => {
    // Single string

    let options: ProjectMetadataFilterOptions = {
      excludeProjectIds: 'asdf',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Multiple strings

    options = {
      excludeProjectIds: ['asdf', 'asdfg'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Still excludes even if includeProjectInterfaces includes

    options = {
      excludeProjectIds: ['asdf', 'asdfg'],
      includeProjectInterfaces: ['^ParatextStandard$', '^platform\\.placeholder$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });

  test('should include only ids matching includeProjectIds', () => {
    // Single string that exact matches one project

    let options: ProjectMetadataFilterOptions = {
      includeProjectIds: 'asdf',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Multiple strings that match two project ids

    options = {
      includeProjectIds: ['asdf', 'asdfg'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // other filters work even if this includes

    options = {
      includeProjectIds: ['asdf', 'asdfg', 'asdfgh'],
      excludeProjectIds: 'asdfg',
      includeProjectInterfaces: ['^ParatextStandard$', '^platform\\.placeholder$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });

  test('should remove ids matching excludeProjectInterfaces', () => {
    // Single RegExp that exact matches one project

    let options: ProjectMetadataFilterOptions = {
      excludeProjectInterfaces: '^helloWorld$',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Single RegExp that loosely matches all projects

    options = {
      excludeProjectInterfaces: 'd',
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(0);

    // Multiple OR'ed RegExps that match two project interfaces

    options = {
      excludeProjectInterfaces: ['^helloWorld$', '^ParatextStandard$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Single AND'ed RegExp

    options = {
      excludeProjectInterfaces: [['platform.notesOnly']],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Multiple AND'ed RegExps

    options = {
      excludeProjectInterfaces: [['helloWorld', 'platform.notesOnly']],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Multiple OR'ed and AND'ed RegExps

    options = {
      excludeProjectInterfaces: [['helloWorld', 'platform.notesOnly'], 'platform.placeholder'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Still excludes even if includeProjectInterfaces includes

    options = {
      excludeProjectInterfaces: 'Paratext',
      includeProjectInterfaces: ['^ParatextStandard$', '^platform\\.placeholder$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });

  test('should include only ids matching includeProjectInterfaces', () => {
    // Single RegExp that exact matches one project

    let options: ProjectMetadataFilterOptions = {
      includeProjectInterfaces: '^helloWorld$',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Single RegExp that loosely matches all projects

    options = {
      includeProjectInterfaces: 'd',
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata).toEqual(projectsMetadata);

    // Multiple RegExps that match two project interfaces

    options = {
      includeProjectInterfaces: ['^helloWorld$', '^ParatextStandard$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Single AND'ed RegExp

    options = {
      includeProjectInterfaces: [['platform.notesOnly']],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Multiple AND'ed RegExps

    options = {
      includeProjectInterfaces: [['helloWorld', 'platform.notesOnly']],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Multiple OR'ed and AND'ed RegExps

    options = {
      includeProjectInterfaces: [['helloWorld', 'platform.notesOnly'], 'platform.placeholder'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // excludeProjectInterfaces excludes even if this includes

    options = {
      excludeProjectInterfaces: 'Paratext',
      includeProjectInterfaces: ['^ParatextStandard$', '^platform\\.placeholder$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });

  test('should remove ids matching excludePdpFactoryIds', () => {
    // Single RegExp that exact matches one project

    let options: ProjectMetadataFilterOptions = {
      excludePdpFactoryIds: '.est1',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // Single RegExp that loosely matches all projects

    options = {
      excludePdpFactoryIds: 'test[34]',
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(0);

    // Multiple OR'ed RegExps that match two pdp factory ids

    options = {
      excludePdpFactoryIds: ['test1', '^test2$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Still excludes even if includePdpFactoryIds includes

    options = {
      excludePdpFactoryIds: ['test4'],
      includePdpFactoryIds: 'test',
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });

  test('should include only ids matching includePdpFactoryIds', () => {
    // Single RegExp that exact matches one project

    let options: ProjectMetadataFilterOptions = {
      includePdpFactoryIds: 'test[^234]',
    };

    let filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);

    // Single RegExp that loosely matches all projects

    options = {
      includePdpFactoryIds: '\\d',
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata).toEqual(projectsMetadata);

    // Multiple RegExps that match two pdpf ids

    options = {
      includePdpFactoryIds: ['test1', '2$'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(2);

    // excludePdpFactoryIds excludes even if this includes

    options = {
      excludePdpFactoryIds: 'test1',
      includePdpFactoryIds: ['test1', 'test2'],
    };

    filteredMetadata = filterProjectsMetadata(projectsMetadata, options);

    expect(filteredMetadata.length).toEqual(1);
  });
});
