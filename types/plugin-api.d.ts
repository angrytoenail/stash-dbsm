declare namespace PluginApi {
  import type { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  const React: typeof import("react");
  const ReactDOM: typeof import("react-dom");
  namespace GQL {
    const AddGalleryImagesDocument: { [key: string]: any };
    const AddTempDlnaipDocument: { [key: string]: any };
    const AnonymiseDatabaseDocument: { [key: string]: any };
    const AvailablePluginPackagesDocument: { [key: string]: any };
    const AvailableScraperPackagesDocument: { [key: string]: any };
    const BackupDatabaseDocument: { [key: string]: any };
    const BlobsStorageType: { [key: string]: any };
    const BulkGalleryUpdateDocument: { [key: string]: any };
    const BulkImageUpdateDocument: { [key: string]: any };
    const BulkGroupUpdateDocument: { [key: string]: any };
    const BulkPerformerUpdateDocument: { [key: string]: any };
    const BulkSceneUpdateDocument: { [key: string]: any };
    const BulkUpdateIdMode: { [key: string]: any };
    const CircumisedEnum: { [key: string]: any };
    const ConfigDataFragmentDoc: { [key: string]: any };
    const ConfigDefaultSettingsDataFragmentDoc: { [key: string]: any };
    const ConfigDlnaDataFragmentDoc: { [key: string]: any };
    const ConfigGeneralDataFragmentDoc: { [key: string]: any };
    const ConfigInterfaceDataFragmentDoc: { [key: string]: any };
    const ConfigScrapingDataFragmentDoc: { [key: string]: any };
    const ConfigurationDocument: { [key: string]: any };
    const ConfigureDefaultsDocument: { [key: string]: any };
    const ConfigureDlnaDocument: { [key: string]: any };
    const ConfigureGeneralDocument: { [key: string]: any };
    const ConfigureInterfaceDocument: { [key: string]: any };
    const ConfigurePluginDocument: { [key: string]: any };
    const ConfigureScrapingDocument: { [key: string]: any };
    const ConfigureUiDocument: { [key: string]: any };
    const CriterionModifier: { [key: string]: any };
    const DeleteFilesDocument: { [key: string]: any };
    const DestroySavedFilterDocument: { [key: string]: any };
    const DirectoryDocument: { [key: string]: any };
    const DisableDlnaDocument: { [key: string]: any };
    const DlnaStatusDocument: { [key: string]: any };
    const EnableDlnaDocument: { [key: string]: any };
    const ExportObjectsDocument: { [key: string]: any };
    const FilterMode: { [key: string]: any };
    const FindDuplicateScenesDocument: { [key: string]: any };
    const FindGalleriesDocument: { [key: string]: any };
    const FindGalleriesForSelectDocument: { [key: string]: any };
    const FindGalleryDocument: { [key: string]: any };
    const FindImageDocument: { [key: string]: any };
    const FindImagesDocument: { [key: string]: any };
    const FindJobDocument: { [key: string]: any };
    const FindGroupDocument: { [key: string]: any };
    const FindGroupsDocument: { [key: string]: any };
    const FindGroupsForSelectDocument: { [key: string]: any };
    const FindPerformerDocument: { [key: string]: any };
    const FindPerformersDocument: { [key: string]: any };
    const FindPerformersForSelectDocument: { [key: string]: any };
    const FindSavedFilterDocument: { [key: string]: any };
    const FindSavedFiltersDocument: { [key: string]: any };
    const FindSceneDocument: { [key: string]: any };
    const FindSceneMarkerTagsDocument: { [key: string]: any };
    const FindSceneMarkersDocument: { [key: string]: any };
    const FindScenesByPathRegexDocument: { [key: string]: any };
    const FindScenesDocument: { [key: string]: any };
    const FindStudioDocument: { [key: string]: any };
    const FindStudiosDocument: { [key: string]: any };
    const FindStudiosForSelectDocument: { [key: string]: any };
    const FindTagDocument: { [key: string]: any };
    const FindTagsDocument: { [key: string]: any };
    const FindTagsForSelectDocument: { [key: string]: any };
    const FolderDataFragmentDoc: { [key: string]: any };
    const GalleriesUpdateDocument: { [key: string]: any };
    const GalleryChapterCreateDocument: { [key: string]: any };
    const GalleryChapterDataFragmentDoc: { [key: string]: any };
    const GalleryChapterDestroyDocument: { [key: string]: any };
    const GalleryChapterUpdateDocument: { [key: string]: any };
    const GalleryCreateDocument: { [key: string]: any };
    const GalleryDataFragmentDoc: { [key: string]: any };
    const GalleryDestroyDocument: { [key: string]: any };
    const GalleryFileDataFragmentDoc: { [key: string]: any };
    const GalleryUpdateDocument: { [key: string]: any };
    const GenderEnum: { [key: string]: any };
    const GenerateApiKeyDocument: { [key: string]: any };
    const HashAlgorithm: { [key: string]: any };
    const IdentifyFieldOptionsDataFragmentDoc: { [key: string]: any };
    const IdentifyFieldStrategy: { [key: string]: any };
    const IdentifyMetadataOptionsDataFragmentDoc: { [key: string]: any };
    const ImageDataFragmentDoc: { [key: string]: any };
    const ImageDecrementODocument: { [key: string]: any };
    const ImageDestroyDocument: { [key: string]: any };
    const ImageFileDataFragmentDoc: { [key: string]: any };
    const ImageIncrementODocument: { [key: string]: any };
    const ImageLightboxDisplayMode: { [key: string]: any };
    const ImageLightboxScrollMode: { [key: string]: any };
    const ImageResetODocument: { [key: string]: any };
    const ImageUpdateDocument: { [key: string]: any };
    const ImagesDestroyDocument: { [key: string]: any };
    const ImagesUpdateDocument: { [key: string]: any };
    const ImportDuplicateEnum: { [key: string]: any };
    const ImportMissingRefEnum: { [key: string]: any };
    const ImportObjectsDocument: { [key: string]: any };
    const InstallPluginPackagesDocument: { [key: string]: any };
    const InstallScraperPackagesDocument: { [key: string]: any };
    const InstalledPluginPackagesDocument: { [key: string]: any };
    const InstalledPluginPackagesStatusDocument: { [key: string]: any };
    const InstalledScraperPackagesDocument: { [key: string]: any };
    const InstalledScraperPackagesStatusDocument: { [key: string]: any };
    const JobDataFragmentDoc: { [key: string]: any };
    const JobQueueDocument: { [key: string]: any };
    const JobStatus: { [key: string]: any };
    const JobStatusUpdateType: { [key: string]: any };
    const JobsSubscribeDocument: { [key: string]: any };
    const LatestVersionDocument: { [key: string]: any };
    const ListGalleryScrapersDocument: { [key: string]: any };
    const ListGroupScrapersDocument: { [key: string]: any };
    const ListPerformerScrapersDocument: { [key: string]: any };
    const ListSceneScrapersDocument: { [key: string]: any };
    const LogEntryDataFragmentDoc: { [key: string]: any };
    const LogLevel: { [key: string]: any };
    const LoggingSubscribeDocument: { [key: string]: any };
    const LogsDocument: { [key: string]: any };
    const MarkerStringsDocument: { [key: string]: any };
    const MarkerWallDocument: { [key: string]: any };
    const MetadataAutoTagDocument: { [key: string]: any };
    const MetadataCleanDocument: { [key: string]: any };
    const MetadataExportDocument: { [key: string]: any };
    const MetadataGenerateDocument: { [key: string]: any };
    const MetadataIdentifyDocument: { [key: string]: any };
    const MetadataImportDocument: { [key: string]: any };
    const MetadataScanDocument: { [key: string]: any };
    const MigrateBlobsDocument: { [key: string]: any };
    const MigrateDocument: { [key: string]: any };
    const MigrateHashNamingDocument: { [key: string]: any };
    const MigrateSceneScreenshotsDocument: { [key: string]: any };
    const GroupCreateDocument: { [key: string]: any };
    const GroupDataFragmentDoc: { [key: string]: any };
    const GroupDestroyDocument: { [key: string]: any };
    const GroupUpdateDocument: { [key: string]: any };
    const GroupsDestroyDocument: { [key: string]: any };
    const OptimiseDatabaseDocument: { [key: string]: any };
    const OrientationEnum: { [key: string]: any };
    const PackageDataFragmentDoc: { [key: string]: any };
    const PackageType: { [key: string]: any };
    const ParseSceneFilenamesDocument: { [key: string]: any };
    const PerformerCreateDocument: { [key: string]: any };
    const PerformerDataFragmentDoc: { [key: string]: any };
    const PerformerDestroyDocument: { [key: string]: any };
    const PerformerUpdateDocument: { [key: string]: any };
    const PerformersDestroyDocument: { [key: string]: any };
    const PluginSettingTypeEnum: { [key: string]: any };
    const PluginTasksDocument: { [key: string]: any };
    const PluginsDocument: { [key: string]: any };
    const PreviewPreset: { [key: string]: any };
    const ReloadPluginsDocument: { [key: string]: any };
    const ReloadScrapersDocument: { [key: string]: any };
    const RemoveGalleryImagesDocument: { [key: string]: any };
    const RemoveTempDlnaipDocument: { [key: string]: any };
    const ResolutionEnum: { [key: string]: any };
    const RunPluginTaskDocument: { [key: string]: any };
    const SaveFilterDocument: { [key: string]: any };
    const SavedFilterDataFragmentDoc: { [key: string]: any };
    const ScanCompleteSubscribeDocument: { [key: string]: any };
    const SceneAssignFileDocument: { [key: string]: any };
    const SceneCreateDocument: { [key: string]: any };
    const SceneDataFragmentDoc: { [key: string]: any };
    const SceneDecrementODocument: { [key: string]: any };
    const SceneDestroyDocument: { [key: string]: any };
    const SceneGenerateScreenshotDocument: { [key: string]: any };
    const SceneIncrementODocument: { [key: string]: any };
    const SceneIncrementPlayCountDocument: { [key: string]: any };
    const SceneMarkerCreateDocument: { [key: string]: any };
    const SceneMarkerDataFragmentDoc: { [key: string]: any };
    const SceneMarkerDestroyDocument: { [key: string]: any };
    const SceneMarkerUpdateDocument: { [key: string]: any };
    const SceneMergeDocument: { [key: string]: any };
    const SceneResetODocument: { [key: string]: any };
    const SceneSaveActivityDocument: { [key: string]: any };
    const SceneStreamsDocument: { [key: string]: any };
    const SceneUpdateDocument: { [key: string]: any };
    const SceneWallDocument: { [key: string]: any };
    const ScenesDestroyDocument: { [key: string]: any };
    const ScenesUpdateDocument: { [key: string]: any };
    const ScrapeContentType: { [key: string]: any };
    const ScrapeGalleryUrlDocument: { [key: string]: any };
    const ScrapeGroupUrlDocument: { [key: string]: any };
    const ScrapeMultiPerformersDocument: { [key: string]: any };
    const ScrapeMultiScenesDocument: { [key: string]: any };
    const ScrapePerformerUrlDocument: { [key: string]: any };
    const ScrapeSceneUrlDocument: { [key: string]: any };
    const ScrapeSingleGalleryDocument: { [key: string]: any };
    const ScrapeSinglePerformerDocument: { [key: string]: any };
    const ScrapeSingleSceneDocument: { [key: string]: any };
    const ScrapeSingleStudioDocument: { [key: string]: any };
    const ScrapeType: { [key: string]: any };
    const ScrapedGalleryDataFragmentDoc: { [key: string]: any };
    const ScrapedGroupDataFragmentDoc: { [key: string]: any };
    const ScrapedGroupStudioDataFragmentDoc: { [key: string]: any };
    const ScrapedPerformerDataFragmentDoc: { [key: string]: any };
    const ScrapedSceneDataFragmentDoc: { [key: string]: any };
    const ScrapedSceneGroupDataFragmentDoc: { [key: string]: any };
    const ScrapedScenePerformerDataFragmentDoc: { [key: string]: any };
    const ScrapedSceneStudioDataFragmentDoc: { [key: string]: any };
    const ScrapedSceneTagDataFragmentDoc: { [key: string]: any };
    const ScrapedStashBoxPerformerDataFragmentDoc: { [key: string]: any };
    const ScrapedStashBoxSceneDataFragmentDoc: { [key: string]: any };
    const ScrapedStudioDataFragmentDoc: { [key: string]: any };
    const ScraperSourceDataFragmentDoc: { [key: string]: any };
    const SelectGalleryDataFragmentDoc: { [key: string]: any };
    const SelectGroupDataFragmentDoc: { [key: string]: any };
    const SelectPerformerDataFragmentDoc: { [key: string]: any };
    const SelectStudioDataFragmentDoc: { [key: string]: any };
    const SelectTagDataFragmentDoc: { [key: string]: any };
    const SetPluginsEnabledDocument: { [key: string]: any };
    const SetupDocument: { [key: string]: any };
    const SlimGalleryDataFragmentDoc: { [key: string]: any };
    const SlimImageDataFragmentDoc: { [key: string]: any };
    const SlimGroupDataFragmentDoc: { [key: string]: any };
    const SlimPerformerDataFragmentDoc: { [key: string]: any };
    const SlimSceneDataFragmentDoc: { [key: string]: any };
    const SlimStudioDataFragmentDoc: { [key: string]: any };
    const SlimTagDataFragmentDoc: { [key: string]: any };
    const SortDirectionEnum: { [key: string]: any };
    const StashBoxBatchPerformerTagDocument: { [key: string]: any };
    const StashBoxBatchStudioTagDocument: { [key: string]: any };
    const StatsDocument: { [key: string]: any };
    const StopAllJobsDocument: { [key: string]: any };
    const StopJobDocument: { [key: string]: any };
    const StreamingResolutionEnum: { [key: string]: any };
    const StudioCreateDocument: { [key: string]: any };
    const StudioDataFragmentDoc: { [key: string]: any };
    const StudioDestroyDocument: { [key: string]: any };
    const StudioUpdateDocument: { [key: string]: any };
    const StudiosDestroyDocument: { [key: string]: any };
    const SubmitStashBoxFingerprintsDocument: { [key: string]: any };
    const SubmitStashBoxPerformerDraftDocument: { [key: string]: any };
    const SubmitStashBoxSceneDraftDocument: { [key: string]: any };
    const SystemStatusDocument: { [key: string]: any };
    const SystemStatusEnum: { [key: string]: any };
    const TagCreateDocument: { [key: string]: any };
    const TagDataFragmentDoc: { [key: string]: any };
    const TagDestroyDocument: { [key: string]: any };
    const TagUpdateDocument: { [key: string]: any };
    const TagsDestroyDocument: { [key: string]: any };
    const TagsMergeDocument: { [key: string]: any };
    const UninstallPluginPackagesDocument: { [key: string]: any };
    const UninstallScraperPackagesDocument: { [key: string]: any };
    const UpdatePluginPackagesDocument: { [key: string]: any };
    const UpdateScraperPackagesDocument: { [key: string]: any };
    const ValidateStashBoxDocument: { [key: string]: any };
    const VersionDocument: { [key: string]: any };
    const VideoFileDataFragmentDoc: { [key: string]: any };
    const VisualFileDataFragmentDoc: { [key: string]: any };

    function refetchAvailablePluginPackagesQuery(...args: any[]): any;

    function refetchAvailableScraperPackagesQuery(...args: any[]): any;

    function refetchConfigurationQuery(...args: any[]): any;

    function refetchDirectoryQuery(...args: any[]): any;

    function refetchDlnaStatusQuery(...args: any[]): any;

    function refetchFindDuplicateScenesQuery(...args: any[]): any;

    function refetchFindGalleriesForSelectQuery(...args: any[]): any;

    function refetchFindGalleriesQuery(...args: any[]): any;

    function refetchFindGalleryQuery(...args: any[]): any;

    function refetchFindImageQuery(...args: any[]): any;

    function refetchFindImagesQuery(...args: any[]): any;

    function refetchFindJobQuery(...args: any[]): any;

    function refetchFindGroupQuery(...args: any[]): any;

    function refetchFindGroupsForSelectQuery(...args: any[]): any;

    function refetchFindGroupsQuery(...args: any[]): any;

    function refetchFindPerformerQuery(...args: any[]): any;

    function refetchFindPerformersForSelectQuery(...args: any[]): any;

    function refetchFindPerformersQuery(...args: any[]): any;

    function refetchFindSavedFilterQuery(...args: any[]): any;

    function refetchFindSavedFiltersQuery(...args: any[]): any;

    function refetchFindSceneMarkerTagsQuery(...args: any[]): any;

    function refetchFindSceneMarkersQuery(...args: any[]): any;

    function refetchFindSceneQuery(...args: any[]): any;

    function refetchFindScenesByPathRegexQuery(...args: any[]): any;

    function refetchFindScenesQuery(...args: any[]): any;

    function refetchFindStudioQuery(...args: any[]): any;

    function refetchFindStudiosForSelectQuery(...args: any[]): any;

    function refetchFindStudiosQuery(...args: any[]): any;

    function refetchFindTagQuery(...args: any[]): any;

    function refetchFindTagsForSelectQuery(...args: any[]): any;

    function refetchFindTagsQuery(...args: any[]): any;

    function refetchInstalledPluginPackagesQuery(...args: any[]): any;

    function refetchInstalledPluginPackagesStatusQuery(...args: any[]): any;

    function refetchInstalledScraperPackagesQuery(...args: any[]): any;

    function refetchInstalledScraperPackagesStatusQuery(...args: any[]): any;

    function refetchJobQueueQuery(...args: any[]): any;

    function refetchLatestVersionQuery(...args: any[]): any;

    function refetchListGalleryScrapersQuery(...args: any[]): any;

    function refetchListGroupScrapersQuery(...args: any[]): any;

    function refetchListPerformerScrapersQuery(...args: any[]): any;

    function refetchListSceneScrapersQuery(...args: any[]): any;

    function refetchLogsQuery(...args: any[]): any;

    function refetchMarkerStringsQuery(...args: any[]): any;

    function refetchMarkerWallQuery(...args: any[]): any;

    function refetchParseSceneFilenamesQuery(...args: any[]): any;

    function refetchPluginTasksQuery(...args: any[]): any;

    function refetchPluginsQuery(...args: any[]): any;

    function refetchSceneStreamsQuery(...args: any[]): any;

    function refetchSceneWallQuery(...args: any[]): any;

    function refetchScrapeGalleryUrlQuery(...args: any[]): any;

    function refetchScrapeGroupUrlQuery(...args: any[]): any;

    function refetchScrapeMultiPerformersQuery(...args: any[]): any;

    function refetchScrapeMultiScenesQuery(...args: any[]): any;

    function refetchScrapePerformerUrlQuery(...args: any[]): any;

    function refetchScrapeSceneUrlQuery(...args: any[]): any;

    function refetchScrapeSingleGalleryQuery(...args: any[]): any;

    function refetchScrapeSinglePerformerQuery(...args: any[]): any;

    function refetchScrapeSingleSceneQuery(...args: any[]): any;

    function refetchScrapeSingleStudioQuery(...args: any[]): any;

    function refetchStatsQuery(...args: any[]): any;

    function refetchSystemStatusQuery(...args: any[]): any;

    function refetchValidateStashBoxQuery(...args: any[]): any;

    function refetchVersionQuery(...args: any[]): any;

    function useAddGalleryImagesMutation(...args: any[]): any;

    function useAddTempDlnaipMutation(...args: any[]): any;

    function useAnonymiseDatabaseMutation(...args: any[]): any;

    function useAvailablePluginPackagesLazyQuery(...args: any[]): any;

    function useAvailablePluginPackagesQuery(...args: any[]): any;

    function useAvailablePluginPackagesSuspenseQuery(...args: any[]): any;

    function useAvailableScraperPackagesLazyQuery(...args: any[]): any;

    function useAvailableScraperPackagesQuery(...args: any[]): any;

    function useAvailableScraperPackagesSuspenseQuery(...args: any[]): any;

    function useBackupDatabaseMutation(...args: any[]): any;

    function useBulkGalleryUpdateMutation(...args: any[]): any;

    function useBulkImageUpdateMutation(...args: any[]): any;

    function useBulkGroupUpdateMutation(...args: any[]): any;

    function useBulkPerformerUpdateMutation(...args: any[]): any;

    function useBulkSceneUpdateMutation(...args: any[]): any;

    function useConfigurationLazyQuery(...args: any[]): any;

    function useConfigurationQuery(...args: any[]): any;

    function useConfigurationSuspenseQuery(...args: any[]): any;

    function useConfigureDefaultsMutation(...args: any[]): any;

    function useConfigureDlnaMutation(...args: any[]): any;

    function useConfigureGeneralMutation(...args: any[]): any;

    function useConfigureInterfaceMutation(...args: any[]): any;

    function useConfigurePluginMutation(...args: any[]): any;

    function useConfigureScrapingMutation(...args: any[]): any;

    function useConfigureUiMutation(...args: any[]): any;

    function useDeleteFilesMutation(...args: any[]): any;

    function useDestroySavedFilterMutation(...args: any[]): any;

    function useDirectoryLazyQuery(...args: any[]): any;

    function useDirectoryQuery(...args: any[]): any;

    function useDirectorySuspenseQuery(...args: any[]): any;

    function useDisableDlnaMutation(...args: any[]): any;

    function useDlnaStatusLazyQuery(...args: any[]): any;

    function useDlnaStatusQuery(...args: any[]): any;

    function useDlnaStatusSuspenseQuery(...args: any[]): any;

    function useEnableDlnaMutation(...args: any[]): any;

    function useExportObjectsMutation(...args: any[]): any;

    function useFindDuplicateScenesLazyQuery(...args: any[]): any;

    function useFindDuplicateScenesQuery(...args: any[]): any;

    function useFindDuplicateScenesSuspenseQuery(...args: any[]): any;

    function useFindGalleriesForSelectLazyQuery(...args: any[]): any;

    function useFindGalleriesForSelectQuery(...args: any[]): any;

    function useFindGalleriesForSelectSuspenseQuery(...args: any[]): any;

    function useFindGalleriesLazyQuery(...args: any[]): any;

    function useFindGalleriesQuery(...args: any[]): any;

    function useFindGalleriesSuspenseQuery(...args: any[]): any;

    function useFindGalleryLazyQuery(...args: any[]): any;

    function useFindGalleryQuery(...args: any[]): any;

    function useFindGallerySuspenseQuery(...args: any[]): any;

    function useFindImageLazyQuery(...args: any[]): any;

    function useFindImageQuery(...args: any[]): any;

    function useFindImageSuspenseQuery(...args: any[]): any;

    function useFindImagesLazyQuery(...args: any[]): any;

    function useFindImagesQuery(...args: any[]): any;

    function useFindImagesSuspenseQuery(...args: any[]): any;

    function useFindJobLazyQuery(...args: any[]): any;

    function useFindJobQuery(...args: any[]): any;

    function useFindJobSuspenseQuery(...args: any[]): any;

    function useFindGroupLazyQuery(...args: any[]): any;

    function useFindGroupQuery(...args: any[]): any;

    function useFindGroupSuspenseQuery(...args: any[]): any;

    function useFindGroupsForSelectLazyQuery(...args: any[]): any;

    function useFindGroupsForSelectQuery(...args: any[]): any;

    function useFindGroupsForSelectSuspenseQuery(...args: any[]): any;

    function useFindGroupsLazyQuery(...args: any[]): any;

    function useFindGroupsQuery(...args: any[]): any;

    function useFindGroupsSuspenseQuery(...args: any[]): any;

    function useFindPerformerLazyQuery(...args: any[]): any;

    function useFindPerformerQuery(...args: any[]): any;

    function useFindPerformerSuspenseQuery(...args: any[]): any;

    function useFindPerformersForSelectLazyQuery(...args: any[]): any;

    function useFindPerformersForSelectQuery(...args: any[]): any;

    function useFindPerformersForSelectSuspenseQuery(...args: any[]): any;

    function useFindPerformersLazyQuery(...args: any[]): any;

    function useFindPerformersQuery(...args: any[]): any;

    function useFindPerformersSuspenseQuery(...args: any[]): any;

    function useFindSavedFilterLazyQuery(...args: any[]): any;

    function useFindSavedFilterQuery(...args: any[]): any;

    function useFindSavedFilterSuspenseQuery(...args: any[]): any;

    function useFindSavedFiltersLazyQuery(...args: any[]): any;

    function useFindSavedFiltersQuery(...args: any[]): any;

    function useFindSavedFiltersSuspenseQuery(...args: any[]): any;

    function useFindSceneLazyQuery(...args: any[]): any;

    function useFindSceneMarkerTagsLazyQuery(...args: any[]): any;

    function useFindSceneMarkerTagsQuery(...args: any[]): any;

    function useFindSceneMarkerTagsSuspenseQuery(...args: any[]): any;

    function useFindSceneMarkersLazyQuery(...args: any[]): any;

    function useFindSceneMarkersQuery(...args: any[]): any;

    function useFindSceneMarkersSuspenseQuery(...args: any[]): any;

    function useFindSceneQuery(...args: any[]): any;

    function useFindSceneSuspenseQuery(...args: any[]): any;

    function useFindScenesByPathRegexLazyQuery(...args: any[]): any;

    function useFindScenesByPathRegexQuery(...args: any[]): any;

    function useFindScenesByPathRegexSuspenseQuery(...args: any[]): any;

    function useFindScenesLazyQuery(...args: any[]): any;

    function useFindScenesQuery(...args: any[]): any;

    function useFindScenesSuspenseQuery(...args: any[]): any;

    function useFindStudioLazyQuery(...args: any[]): any;

    function useFindStudioQuery(...args: any[]): any;

    function useFindStudioSuspenseQuery(...args: any[]): any;

    function useFindStudiosForSelectLazyQuery(...args: any[]): any;

    function useFindStudiosForSelectQuery(...args: any[]): any;

    function useFindStudiosForSelectSuspenseQuery(...args: any[]): any;

    function useFindStudiosLazyQuery(...args: any[]): any;

    function useFindStudiosQuery(...args: any[]): any;

    function useFindStudiosSuspenseQuery(...args: any[]): any;

    function useFindTagLazyQuery(...args: any[]): any;

    function useFindTagQuery(...args: any[]): any;

    function useFindTagSuspenseQuery(...args: any[]): any;

    function useFindTagsForSelectLazyQuery(...args: any[]): any;

    function useFindTagsForSelectQuery(...args: any[]): any;

    function useFindTagsForSelectSuspenseQuery(...args: any[]): any;

    function useFindTagsLazyQuery(...args: any[]): any;

    function useFindTagsQuery(...args: any[]): any;

    function useFindTagsSuspenseQuery(...args: any[]): any;

    function useGalleriesUpdateMutation(...args: any[]): any;

    function useGalleryChapterCreateMutation(...args: any[]): any;

    function useGalleryChapterDestroyMutation(...args: any[]): any;

    function useGalleryChapterUpdateMutation(...args: any[]): any;

    function useGalleryCreateMutation(...args: any[]): any;

    function useGalleryDestroyMutation(...args: any[]): any;

    function useGalleryUpdateMutation(...args: any[]): any;

    function useGenerateApiKeyMutation(...args: any[]): any;

    function useImageDecrementOMutation(...args: any[]): any;

    function useImageDestroyMutation(...args: any[]): any;

    function useImageIncrementOMutation(...args: any[]): any;

    function useImageResetOMutation(...args: any[]): any;

    function useImageUpdateMutation(...args: any[]): any;

    function useImagesDestroyMutation(...args: any[]): any;

    function useImagesUpdateMutation(...args: any[]): any;

    function useImportObjectsMutation(...args: any[]): any;

    function useInstallPluginPackagesMutation(...args: any[]): any;

    function useInstallScraperPackagesMutation(...args: any[]): any;

    function useInstalledPluginPackagesLazyQuery(...args: any[]): any;

    function useInstalledPluginPackagesQuery(...args: any[]): any;

    function useInstalledPluginPackagesStatusLazyQuery(...args: any[]): any;

    function useInstalledPluginPackagesStatusQuery(...args: any[]): any;

    function useInstalledPluginPackagesStatusSuspenseQuery(...args: any[]): any;

    function useInstalledPluginPackagesSuspenseQuery(...args: any[]): any;

    function useInstalledScraperPackagesLazyQuery(...args: any[]): any;

    function useInstalledScraperPackagesQuery(...args: any[]): any;

    function useInstalledScraperPackagesStatusLazyQuery(...args: any[]): any;

    function useInstalledScraperPackagesStatusQuery(...args: any[]): any;

    function useInstalledScraperPackagesStatusSuspenseQuery(
      ...args: any[]
    ): any;

    function useInstalledScraperPackagesSuspenseQuery(...args: any[]): any;

    function useJobQueueLazyQuery(...args: any[]): any;

    function useJobQueueQuery(...args: any[]): any;

    function useJobQueueSuspenseQuery(...args: any[]): any;

    function useJobsSubscribeSubscription(...args: any[]): any;

    function useLatestVersionLazyQuery(...args: any[]): any;

    function useLatestVersionQuery(...args: any[]): any;

    function useLatestVersionSuspenseQuery(...args: any[]): any;

    function useListGalleryScrapersLazyQuery(...args: any[]): any;

    function useListGalleryScrapersQuery(...args: any[]): any;

    function useListGalleryScrapersSuspenseQuery(...args: any[]): any;

    function useListGroupScrapersLazyQuery(...args: any[]): any;

    function useListGroupScrapersQuery(...args: any[]): any;

    function useListGroupScrapersSuspenseQuery(...args: any[]): any;

    function useListPerformerScrapersLazyQuery(...args: any[]): any;

    function useListPerformerScrapersQuery(...args: any[]): any;

    function useListPerformerScrapersSuspenseQuery(...args: any[]): any;

    function useListSceneScrapersLazyQuery(...args: any[]): any;

    function useListSceneScrapersQuery(...args: any[]): any;

    function useListSceneScrapersSuspenseQuery(...args: any[]): any;

    function useLoggingSubscribeSubscription(...args: any[]): any;

    function useLogsLazyQuery(...args: any[]): any;

    function useLogsQuery(...args: any[]): any;

    function useLogsSuspenseQuery(...args: any[]): any;

    function useMarkerStringsLazyQuery(...args: any[]): any;

    function useMarkerStringsQuery(...args: any[]): any;

    function useMarkerStringsSuspenseQuery(...args: any[]): any;

    function useMarkerWallLazyQuery(...args: any[]): any;

    function useMarkerWallQuery(...args: any[]): any;

    function useMarkerWallSuspenseQuery(...args: any[]): any;

    function useMetadataAutoTagMutation(...args: any[]): any;

    function useMetadataCleanMutation(...args: any[]): any;

    function useMetadataExportMutation(...args: any[]): any;

    function useMetadataGenerateMutation(...args: any[]): any;

    function useMetadataIdentifyMutation(...args: any[]): any;

    function useMetadataImportMutation(...args: any[]): any;

    function useMetadataScanMutation(...args: any[]): any;

    function useMigrateBlobsMutation(...args: any[]): any;

    function useMigrateHashNamingMutation(...args: any[]): any;

    function useMigrateMutation(...args: any[]): any;

    function useMigrateSceneScreenshotsMutation(...args: any[]): any;

    function useGroupCreateMutation(...args: any[]): any;

    function useGroupDestroyMutation(...args: any[]): any;

    function useGroupUpdateMutation(...args: any[]): any;

    function useGroupsDestroyMutation(...args: any[]): any;

    function useOptimiseDatabaseMutation(...args: any[]): any;

    function useParseSceneFilenamesLazyQuery(...args: any[]): any;

    function useParseSceneFilenamesQuery(...args: any[]): any;

    function useParseSceneFilenamesSuspenseQuery(...args: any[]): any;

    function usePerformerCreateMutation(...args: any[]): any;

    function usePerformerDestroyMutation(...args: any[]): any;

    function usePerformerUpdateMutation(...args: any[]): any;

    function usePerformersDestroyMutation(...args: any[]): any;

    function usePluginTasksLazyQuery(...args: any[]): any;

    function usePluginTasksQuery(...args: any[]): any;

    function usePluginTasksSuspenseQuery(...args: any[]): any;

    function usePluginsLazyQuery(...args: any[]): any;

    function usePluginsQuery(...args: any[]): any;

    function usePluginsSuspenseQuery(...args: any[]): any;

    function useReloadPluginsMutation(...args: any[]): any;

    function useReloadScrapersMutation(...args: any[]): any;

    function useRemoveGalleryImagesMutation(...args: any[]): any;

    function useRemoveTempDlnaipMutation(...args: any[]): any;

    function useRunPluginTaskMutation(...args: any[]): any;

    function useSaveFilterMutation(...args: any[]): any;

    function useScanCompleteSubscribeSubscription(...args: any[]): any;

    function useSceneAssignFileMutation(...args: any[]): any;

    function useSceneCreateMutation(...args: any[]): any;

    function useSceneDecrementOMutation(...args: any[]): any;

    function useSceneDestroyMutation(...args: any[]): any;

    function useSceneGenerateScreenshotMutation(...args: any[]): any;

    function useSceneIncrementOMutation(...args: any[]): any;

    function useSceneIncrementPlayCountMutation(...args: any[]): any;

    function useSceneMarkerCreateMutation(...args: any[]): any;

    function useSceneMarkerDestroyMutation(...args: any[]): any;

    function useSceneMarkerUpdateMutation(...args: any[]): any;

    function useSceneMergeMutation(...args: any[]): any;

    function useSceneResetOMutation(...args: any[]): any;

    function useSceneSaveActivityMutation(...args: any[]): any;

    function useSceneStreamsLazyQuery(...args: any[]): any;

    function useSceneStreamsQuery(...args: any[]): any;

    function useSceneStreamsSuspenseQuery(...args: any[]): any;

    function useSceneUpdateMutation(...args: any[]): any;

    function useSceneWallLazyQuery(...args: any[]): any;

    function useSceneWallQuery(...args: any[]): any;

    function useSceneWallSuspenseQuery(...args: any[]): any;

    function useScenesDestroyMutation(...args: any[]): any;

    function useScenesUpdateMutation(...args: any[]): any;

    function useScrapeGalleryUrlLazyQuery(...args: any[]): any;

    function useScrapeGalleryUrlQuery(...args: any[]): any;

    function useScrapeGalleryUrlSuspenseQuery(...args: any[]): any;

    function useScrapeGroupUrlLazyQuery(...args: any[]): any;

    function useScrapeGroupUrlQuery(...args: any[]): any;

    function useScrapeGroupUrlSuspenseQuery(...args: any[]): any;

    function useScrapeMultiPerformersLazyQuery(...args: any[]): any;

    function useScrapeMultiPerformersQuery(...args: any[]): any;

    function useScrapeMultiPerformersSuspenseQuery(...args: any[]): any;

    function useScrapeMultiScenesLazyQuery(...args: any[]): any;

    function useScrapeMultiScenesQuery(...args: any[]): any;

    function useScrapeMultiScenesSuspenseQuery(...args: any[]): any;

    function useScrapePerformerUrlLazyQuery(...args: any[]): any;

    function useScrapePerformerUrlQuery(...args: any[]): any;

    function useScrapePerformerUrlSuspenseQuery(...args: any[]): any;

    function useScrapeSceneUrlLazyQuery(...args: any[]): any;

    function useScrapeSceneUrlQuery(...args: any[]): any;

    function useScrapeSceneUrlSuspenseQuery(...args: any[]): any;

    function useScrapeSingleGalleryLazyQuery(...args: any[]): any;

    function useScrapeSingleGalleryQuery(...args: any[]): any;

    function useScrapeSingleGallerySuspenseQuery(...args: any[]): any;

    function useScrapeSinglePerformerLazyQuery(...args: any[]): any;

    function useScrapeSinglePerformerQuery(...args: any[]): any;

    function useScrapeSinglePerformerSuspenseQuery(...args: any[]): any;

    function useScrapeSingleSceneLazyQuery(...args: any[]): any;

    function useScrapeSingleSceneQuery(...args: any[]): any;

    function useScrapeSingleSceneSuspenseQuery(...args: any[]): any;

    function useScrapeSingleStudioLazyQuery(...args: any[]): any;

    function useScrapeSingleStudioQuery(...args: any[]): any;

    function useScrapeSingleStudioSuspenseQuery(...args: any[]): any;

    function useSetDefaultFilterMutation(...args: any[]): any;

    function useSetPluginsEnabledMutation(...args: any[]): any;

    function useSetupMutation(...args: any[]): any;

    function useStashBoxBatchPerformerTagMutation(...args: any[]): any;

    function useStashBoxBatchStudioTagMutation(...args: any[]): any;

    function useStatsLazyQuery(...args: any[]): any;

    function useStatsQuery(...args: any[]): any;

    function useStatsSuspenseQuery(...args: any[]): any;

    function useStopAllJobsMutation(...args: any[]): any;

    function useStopJobMutation(...args: any[]): any;

    function useStudioCreateMutation(...args: any[]): any;

    function useStudioDestroyMutation(...args: any[]): any;

    function useStudioUpdateMutation(...args: any[]): any;

    function useStudiosDestroyMutation(...args: any[]): any;

    function useSubmitStashBoxFingerprintsMutation(...args: any[]): any;

    function useSubmitStashBoxPerformerDraftMutation(...args: any[]): any;

    function useSubmitStashBoxSceneDraftMutation(...args: any[]): any;

    function useSystemStatusLazyQuery(...args: any[]): any;

    function useSystemStatusQuery(...args: any[]): any;

    function useSystemStatusSuspenseQuery(...args: any[]): any;

    function useTagCreateMutation(...args: any[]): any;

    function useTagDestroyMutation(...args: any[]): any;

    function useTagUpdateMutation(...args: any[]): any;

    function useTagsDestroyMutation(...args: any[]): any;

    function useTagsMergeMutation(...args: any[]): any;

    function useUninstallPluginPackagesMutation(...args: any[]): any;

    function useUninstallScraperPackagesMutation(...args: any[]): any;

    function useUpdatePluginPackagesMutation(...args: any[]): any;

    function useUpdateScraperPackagesMutation(...args: any[]): any;

    function useValidateStashBoxLazyQuery(...args: any[]): any;

    function useValidateStashBoxQuery(...args: any[]): any;

    function useValidateStashBoxSuspenseQuery(...args: any[]): any;

    function useVersionLazyQuery(...args: any[]): any;

    function useVersionQuery(...args: any[]): any;

    function useVersionSuspenseQuery(...args: any[]): any;
  }
  namespace libraries {
    const Apollo: typeof import("@apollo/client");
    const Bootstrap: typeof import("react-bootstrap");
    const FontAwesomeRegular: typeof import("@fortawesome/free-regular-svg-icons");
    const FontAwesomeSolid: typeof import("@fortawesome/free-solid-svg-icons");
    const Intl: typeof import("react-intl");
    const Mousetrap: typeof import("mousetrap");

    // @ts-expect-error
    import { MousetrapStatic } from "mousetrap";

    function MousetrapPause(mousetrap: MousetrapStatic): MousetrapStatic;

    const ReactRouterDOM: typeof import("react-router-dom");
  }
  namespace loadableComponents {
    interface ISceneCardProps {
      scene: any;
      containerWidth?: number;
      previewHeight?: number;
      index?: number;
      queue?: any;
      compact?: boolean;
      selecting?: boolean;
      selected?: boolean | undefined;
      zoomIndex?: number;
      onSelectedChanged?: (selected: boolean, shiftKey: boolean) => void;
    }

    interface IScenePreviewProps {
      isPortrait: boolean;
      image?: string;
      video?: string;
      soundActive: boolean;
      vttPath?: string;
      onScrubberClick?: (timestamp: number) => void;
    }

    function SceneCard(): Promise<{
      SceneCard: React.FC<ISceneCardProps>;
      ScenePreview: React.FC<IScenePreviewProps>;
    }>;
  }
  const components: {
    HoverPopover: React.FC<any>;
    TagLink: React.FC<any>;
    LoadingIndicator: React.FC<any>;
    Icon: FontAwesomeIcon;
    "MainNavBar.MenuItems": React.FC<any>;
    "MainNavBar.UtilityItems": React.FC<any>;
    PerformerSelect: React.FC<any>;
    PerformerIDSelect: React.FC<any>;
    TagSelect: React.FC<any>;
    TagIDSelect: React.FC<any>;
    StudioSelect: React.FC<any>;
    StudioIDSelect: React.FC<any>;
    GallerySelect: React.FC<any>;
    GalleryIDSelect: React.FC<any>;
    GroupSelect: React.FC<any>;
    GroupIDSelect: React.FC<any>;
    SceneSelect: React.FC<any>;
    SceneIDSelect: React.FC<any>;
    DateInput: React.FC<any>;
    CountrySelect: React.FC<any>;
    FolderSelect: React.FC<any>;
    "SceneCard.Popovers": React.FC<any>;
    "SceneCard.Details": React.FC<any>;
    "SceneCard.Overlays": React.FC<any>;
    "SceneCard.Image": React.FC<any>;
    PluginSettings: React.FC<any>;
    Setting: React.FC<any>;
    SettingGroup: React.FC<any>;
    BooleanSetting: React.FC<any>;
    SelectSetting: React.FC<any>;
    ChangeButtonSetting: React.FC<any>;
    SettingModal: React.FC<any>;
    ModalSetting: React.FC<any>;
    StringSetting: React.FC<any>;
    NumberSetting: React.FC<any>;
    StringListSetting: React.FC<any>;
    ConstantSetting: React.FC<any>;
    SceneFileInfoPanel: Rect.FC<any>;
  };
  namespace utils {
    namespace NavUtils {
      function makePerformerScenesUrl(...args: any[]): any;

      function makePerformerImagesUrl(...args: any[]): any;

      function makePerformerGalleriesUrl(...args: any[]): any;

      function makePerformerGroupsUrl(...args: any[]): any;

      function makePerformersCountryUrl(...args: any[]): any;

      function makeStudioScenesUrl(...args: any[]): any;

      function makeStudioImagesUrl(...args: any[]): any;

      function makeStudioGalleriesUrl(...args: any[]): any;

      function makeStudioGroupsUrl(...args: any[]): any;

      function makeStudioPerformersUrl(...args: any[]): any;

      function makeTagUrl(...args: any[]): any;

      function makeParentTagsUrl(...args: any[]): any;

      function makeChildTagsUrl(...args: any[]): any;

      function makeTagSceneMarkersUrl(...args: any[]): any;

      function makeTagScenesUrl(...args: any[]): any;

      function makeTagPerformersUrl(...args: any[]): any;

      function makeTagGalleriesUrl(...args: any[]): any;

      function makeTagImagesUrl(...args: any[]): any;

      function makeScenesPHashMatchUrl(...args: any[]): any;

      function makeSceneMarkerUrl(...args: any[]): any;

      function makeGroupScenesUrl(...args: any[]): any;

      function makeChildStudiosUrl(...args: any[]): any;

      function makeGalleryImagesUrl(...args: any[]): any;
    }
    namespace StashService {
      function evictQueries(...args: any[]): any;

      function getClient(...args: any[]): any;

      function mutateAddGalleryImages(...args: any[]): any;

      function mutateAnonymiseDatabase(...args: any[]): any;

      function mutateBackupDatabase(...args: any[]): any;

      function mutateCreateScene(...args: any[]): any;

      function mutateDeleteFiles(...args: any[]): any;

      function mutateExportObjects(...args: any[]): any;

      function mutateGallerySetPrimaryFile(...args: any[]): any;

      function mutateImageDecrementO(...args: any[]): any;

      function mutateImageIncrementO(...args: any[]): any;

      function mutateImageResetO(...args: any[]): any;

      function mutateImageSetPrimaryFile(...args: any[]): any;

      function mutateImportObjects(...args: any[]): any;

      function mutateInstallPluginPackages(...args: any[]): any;

      function mutateInstallScraperPackages(...args: any[]): any;

      function mutateMetadataAutoTag(...args: any[]): any;

      function mutateMetadataClean(...args: any[]): any;

      function mutateMetadataExport(...args: any[]): any;

      function mutateMetadataGenerate(...args: any[]): any;

      function mutateMetadataIdentify(...args: any[]): any;

      function mutateMetadataImport(...args: any[]): any;

      function mutateMetadataScan(...args: any[]): any;

      function mutateMigrate(...args: any[]): any;

      function mutateMigrateBlobs(...args: any[]): any;

      function mutateMigrateHashNaming(...args: any[]): any;

      function mutateMigrateSceneScreenshots(...args: any[]): any;

      function mutateOptimiseDatabase(...args: any[]): any;

      function mutateReloadPlugins(...args: any[]): any;

      function mutateReloadScrapers(...args: any[]): any;

      function mutateRemoveGalleryImages(...args: any[]): any;

      function mutateRunPluginTask(...args: any[]): any;

      function mutateSceneAssignFile(...args: any[]): any;

      function mutateSceneMerge(...args: any[]): any;

      function mutateSceneSetPrimaryFile(...args: any[]): any;

      function mutateSetPluginsEnabled(...args: any[]): any;

      function mutateSetup(...args: any[]): any;

      function mutateStashBoxBatchPerformerTag(...args: any[]): any;

      function mutateStashBoxBatchStudioTag(...args: any[]): any;

      function mutateStopJob(...args: any[]): any;

      function mutateSubmitStashBoxPerformerDraft(...args: any[]): any;

      function mutateSubmitStashBoxSceneDraft(...args: any[]): any;

      function mutateUninstallPluginPackages(...args: any[]): any;

      function mutateUninstallScraperPackages(...args: any[]): any;

      function mutateUpdatePluginPackages(...args: any[]): any;

      function mutateUpdateScraperPackages(...args: any[]): any;

      function queryAvailablePluginPackages(...args: any[]): any;

      function queryAvailableScraperPackages(...args: any[]): any;

      function queryFindGalleries(...args: any[]): any;

      function queryFindGalleriesByIDForSelect(...args: any[]): any;

      function queryFindGalleriesForSelect(...args: any[]): any;

      function queryFindImages(...args: any[]): any;

      function queryFindGroups(...args: any[]): any;

      function queryFindGroupsByIDForSelect(...args: any[]): any;

      function queryFindGroupsForSelect(...args: any[]): any;

      function queryFindPerformer(...args: any[]): any;

      function queryFindPerformers(...args: any[]): any;

      function queryFindPerformersByIDForSelect(...args: any[]): any;

      function queryFindPerformersForSelect(...args: any[]): any;

      function queryFindSceneMarkers(...args: any[]): any;

      function queryFindScenes(...args: any[]): any;

      function queryFindScenesByID(...args: any[]): any;

      function queryFindStudio(...args: any[]): any;

      function queryFindStudios(...args: any[]): any;

      function queryFindStudiosByIDForSelect(...args: any[]): any;

      function queryFindStudiosForSelect(...args: any[]): any;

      function queryFindTags(...args: any[]): any;

      function queryFindTagsByIDForSelect(...args: any[]): any;

      function queryFindTagsForSelect(...args: any[]): any;

      function queryLogs(...args: any[]): any;

      function queryParseSceneFilenames(...args: any[]): any;

      function querySceneByPathRegex(...args: any[]): any;

      function queryScrapeGallery(...args: any[]): any;

      function queryScrapeGalleryURL(...args: any[]): any;

      function queryScrapeGroupURL(...args: any[]): any;

      function queryScrapePerformer(...args: any[]): any;

      function queryScrapePerformerURL(...args: any[]): any;

      function queryScrapeScene(...args: any[]): any;

      function queryScrapeSceneQuery(...args: any[]): any;

      function queryScrapeSceneQueryFragment(...args: any[]): any;

      function queryScrapeSceneURL(...args: any[]): any;

      function stashBoxPerformerQuery(...args: any[]): any;

      function stashBoxSceneBatchQuery(...args: any[]): any;

      function stashBoxStudioQuery(...args: any[]): any;

      function useAddTempDLNAIP(...args: any[]): any;

      function useBulkGalleryUpdate(...args: any[]): any;

      function useBulkImageUpdate(...args: any[]): any;

      function useBulkGroupUpdate(...args: any[]): any;

      function useBulkPerformerUpdate(...args: any[]): any;

      function useBulkSceneUpdate(...args: any[]): any;

      function useConfiguration(...args: any[]): any;

      function useConfigureDLNA(...args: any[]): any;

      function useConfigureDefaults(...args: any[]): any;

      function useConfigureGeneral(...args: any[]): any;

      function useConfigureInterface(...args: any[]): any;

      function useConfigurePlugin(...args: any[]): any;

      function useConfigureScraping(...args: any[]): any;

      function useConfigureUI(...args: any[]): any;

      function useDLNAStatus(...args: any[]): any;

      function useDirectory(...args: any[]): any;

      function useDisableDLNA(...args: any[]): any;

      function useEnableDLNA(...args: any[]): any;

      function useFindDefaultFilter(...args: any[]): any;

      function useFindGalleries(...args: any[]): any;

      function useFindGallery(...args: any[]): any;

      function useFindImage(...args: any[]): any;

      function useFindImages(...args: any[]): any;

      function useFindGroup(...args: any[]): any;

      function useFindGroups(...args: any[]): any;

      function useFindPerformer(...args: any[]): any;

      function useFindPerformers(...args: any[]): any;

      function useFindSavedFilter(...args: any[]): any;

      function useFindSavedFilters(...args: any[]): any;

      function useFindScene(...args: any[]): any;

      function useFindSceneMarkers(...args: any[]): any;

      function useFindScenes(...args: any[]): any;

      function useFindStudio(...args: any[]): any;

      function useFindStudios(...args: any[]): any;

      function useFindTag(...args: any[]): any;

      function useFindTags(...args: any[]): any;

      function useGalleryChapterCreate(...args: any[]): any;

      function useGalleryChapterDestroy(...args: any[]): any;

      function useGalleryChapterUpdate(...args: any[]): any;

      function useGalleryCreate(...args: any[]): any;

      function useGalleryDestroy(...args: any[]): any;

      function useGalleryUpdate(...args: any[]): any;

      function useGenerateAPIKey(...args: any[]): any;

      function useImageDecrementO(...args: any[]): any;

      function useImageIncrementO(...args: any[]): any;

      function useImageResetO(...args: any[]): any;

      function useImageUpdate(...args: any[]): any;

      function useImagesDestroy(...args: any[]): any;

      function useInstalledPluginPackages(...args: any[]): any;

      function useInstalledScraperPackages(...args: any[]): any;

      function useJobQueue(...args: any[]): any;

      function useJobsSubscribe(...args: any[]): any;

      function useLatestVersion(...args: any[]): any;

      function useListGalleryScrapers(...args: any[]): any;

      function useListGroupScrapers(...args: any[]): any;

      function useListPerformerScrapers(...args: any[]): any;

      function useListSceneScrapers(...args: any[]): any;

      function useLoggingSubscribe(...args: any[]): any;

      function useLogs(...args: any[]): any;

      function useMarkerStrings(...args: any[]): any;

      function useGroupCreate(...args: any[]): any;

      function useGroupDestroy(...args: any[]): any;

      function useGroupUpdate(...args: any[]): any;

      function useGroupsDestroy(...args: any[]): any;

      function usePerformerCreate(...args: any[]): any;

      function usePerformerDestroy(...args: any[]): any;

      function usePerformerUpdate(...args: any[]): any;

      function usePerformersDestroy(...args: any[]): any;

      function usePluginTasks(...args: any[]): any;

      function usePlugins(...args: any[]): any;

      function useRemoveTempDLNAIP(...args: any[]): any;

      function useSaveFilter(...args: any[]): any;

      function useSavedFilterDestroy(...args: any[]): any;

      function useSceneDecrementO(...args: any[]): any;

      function useSceneDestroy(...args: any[]): any;

      function useSceneGenerateScreenshot(...args: any[]): any;

      function useSceneIncrementO(...args: any[]): any;

      function useSceneIncrementPlayCount(...args: any[]): any;

      function useSceneMarkerCreate(...args: any[]): any;

      function useSceneMarkerDestroy(...args: any[]): any;

      function useSceneMarkerUpdate(...args: any[]): any;

      function useSceneResetO(...args: any[]): any;

      function useSceneSaveActivity(...args: any[]): any;

      function useSceneStreams(...args: any[]): any;

      function useSceneUpdate(...args: any[]): any;

      function useScenesDestroy(...args: any[]): any;

      function useScenesUpdate(...args: any[]): any;

      function useScrapePerformerList(...args: any[]): any;

      function useSetDefaultFilter(...args: any[]): any;

      function useStats(...args: any[]): any;

      function useStudioCreate(...args: any[]): any;

      function useStudioDestroy(...args: any[]): any;

      function useStudioUpdate(...args: any[]): any;

      function useStudiosDestroy(...args: any[]): any;

      function useSystemStatus(...args: any[]): any;

      function useTagCreate(...args: any[]): any;

      function useTagDestroy(...args: any[]): any;

      function useTagUpdate(...args: any[]): any;

      function useTagsDestroy(...args: any[]): any;

      function useTagsMerge(...args: any[]): any;

      function useVersion(...args: any[]): any;

      const performerMutationImpactedQueries: { [key: string]: any }[];
      const pluginMutationImpactedQueries: { [key: string]: any }[];
      const scraperMutationImpactedQueries: { [key: string]: any }[];
      const studioMutationImpactedQueries: { [key: string]: any }[];
    }

    function loadComponents(components: (() => Promise<unknown>)[]): void;
  }
  namespace hooks {
    function useLoadComponents(toLoad: (() => Promise<unknown>)[]): boolean;

    function useSpriteInfo(vttPath: string | undefined):
      | {
          url: string;
          start: number;
          end: number;
          x: number;
          y: number;
          w: number;
          h: number;
        }
      | undefined;

    function useToast(): {
      toast: any;
      success(message: JSX.Element | string): void;
      error(error: unknown): void;
    };

    function useSettings(): {
      loading: boolean;
      error: any | undefined;
      general: any;
      interface: {
        funscriptOffset?: number;
      };
      defaults: any;
      scraping: any;
      dlna: any;
      ui: any;
      plugins: any;

      advancedMode: boolean;

      // apikey isn't directly settable, so expose it here
      apiKey: string;

      saveGeneral: (input: any) => void;
      saveInterface: (input: any) => void;
      saveDefaults: (input: any) => void;
      saveScraping: (input: any) => void;
      saveDLNA: (input: any) => void;
      saveUI: (input: any) => void;
      savePluginSettings: (pluginID: string, input: {}) => void;
      setAdvancedMode: (value: boolean) => void;

      refetch: () => void;
    };

    export enum ConnectionState {
      Missing,
      Disconnected,
      Error,
      Connecting,
      Syncing,
      Uploading,
      Ready,
    }

    type AsyncVoid = Promise<void>;

    import type Handy from "thehandy";
    export type InteractiveAPI = {
      _connected: boolean;
      _playing: boolean;
      _scriptOffset: number;
      _handy: Handy;
      _useStashHostedFunscript: boolean;
      connect(): Promise<void>;
      set handyKey(key: string);
      get handyKey(): string;
      set useStashHostedFunscript(useStashHostedFunscript: boolean);
      get useStashHostedFunscript(): boolean;
      set scriptOffset(offset: number);
      uploadScript(funscriptPath: string, apiKey?: string): AsyncVoid;
      sync(): Promise<number>;
      setServerTimeOffset(offset: number);
      play(position: number): AsyncVoid;
      pause(): Promise<void>;
      ensurePlaying(position: number): AsyncVoid;
      setLooping(looping: boolean): AsyncVoid;
    };

    function useInteractive(): {
      interactive: InteractiveAPI;
      state: ConnectionState;
      serverOffset: number;
      initialised: boolean;
      currentScript?: string;
      error?: string;
      initialise: () => Promise<void>;
      uploadScript: (funscriptPath: string) => Promise<void>;
      sync: () => Promise<void>;
    };
  }
  export type ComponentNames = keyof typeof components | string;
  export type BeforeFunction = (
    props: PropsWithChildren,
  ) => PropsWithChildren[];
  export type InsteadFunction = (
    props: PropsWithChildren,
    _: unknown,
    original: React.FC<any>,
  ) => React.JSX.Element;
  export type AfterFunction = (
    props: PropsWithChildren,
    _: unknown,
    results: PropsWithChildren,
  ) => React.JSX.Element;
  namespace patch {
    function before(target: ComponentNames, fn: BeforeFunction): void;

    function instead(target: ComponentNames, fn: InsteadFunction): void;

    function after(target: ComponentNames, fn: AfterFunction): void;
  }
  namespace register {
    function route(path: string, component: React.FC<any>): void;
  }
}

declare module "mousetrap-pause" {
  import { MousetrapStatic } from "mousetrap";

  function MousetrapPause(mousetrap: MousetrapStatic): MousetrapStatic;

  export default MousetrapPause;

  module "mousetrap" {
    interface MousetrapStatic {
      pause(): void;

      unpause(): void;

      pauseCombo(combo: string): void;

      unpauseCombo(combo: string): void;
    }

    interface MousetrapInstance {
      pause(): void;

      unpause(): void;

      pauseCombo(combo: string): void;

      unpauseCombo(combo: string): void;
    }
  }
}
