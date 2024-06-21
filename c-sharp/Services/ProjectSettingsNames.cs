namespace Paranext.DataProvider.Services;

public sealed class ProjectSettingsNames
{
    public const string PB_BOOKS_PRESENT = "platformScripture.booksPresent";
    public const string PT_BOOKS_PRESENT = "BooksPresent";

    public const string PB_NAME = "platform.name";
    public const string PT_NAME = "Name";

    public const string PB_FULL_NAME = "platform.fullName";
    public const string PT_FULL_NAME = "FullName";

    public const string PB_LANGUAGE = "platform.language";
    public const string PT_LANGUAGE = "Language";

    public const string PB_VERSIFICATION = "platformScripture.versification";
    public const string PT_VERSIFICATION = "Versification";

    public const string PB_IS_EDITABLE = "platform.isEditable";
    public const string PT_IS_EDITABLE = "Editable";

    /// <summary>
    /// Paratext setting names that are either T or F and need to be converted to booleans
    /// </summary>
    private static readonly HashSet<string> s_ptSettingBooleans = ["Editable", "MatchBasedOnStems", "AllowReadAccess", "AllowSharingWithSLDR", ];

    // Make sure this dictionary gets updated whenever new settings are added
    private static readonly Dictionary<string, string> s_platformBibleToParatextSettingsNames =
        new()
        {
            { PB_BOOKS_PRESENT, PT_BOOKS_PRESENT },
            { PB_FULL_NAME, PT_FULL_NAME },
            { PB_LANGUAGE, PT_LANGUAGE },
            { PB_NAME, PT_NAME },
            { PB_VERSIFICATION, PT_VERSIFICATION },
            { PB_IS_EDITABLE, PT_IS_EDITABLE },
        };

    private static readonly Dictionary<string, string> s_paratextToPlatformBibleSettingsNames =
        s_platformBibleToParatextSettingsNames.ToDictionary((i) => i.Value, (i) => i.Key);

    /// <summary>
    /// Convert project setting names from Platform.Bible terminology to Paratext terminology
    /// </summary>
    /// <param name="pbSettingName">Setting name in Platform.Bible terminology</param>
    /// <returns>Setting name in Paratext terminology if a mapping exists</returns>
    public static string? GetParatextSettingNameFromPlatformBibleSettingName(string pbSettingName)
    {
        return s_platformBibleToParatextSettingsNames.TryGetValue(pbSettingName, out string? retVal)
            ? retVal
            : null;
    }

    /// <summary>
    /// Convert project setting names from Paratext terminology to Platform.Bible terminology
    /// </summary>
    /// <param name="ptSettingName">Setting name in Paratext terminology</param>
    /// <returns>Setting name in Platform.Bible terminology if a mapping exists</returns>
    public static string? GetPlatformBibleSettingNameFromParatextSettingName(string ptSettingName)
    {
        return s_paratextToPlatformBibleSettingsNames.TryGetValue(ptSettingName, out string? retVal)
            ? retVal
            : null;
    }

    /// <summary>
    /// Determines whether a Paratext Setting is expected to be a boolean ("T" or "F" only)
    /// </summary>
    /// <param name="ptSettingName"></param>
    /// <returns></returns>
    public static bool IsParatextSettingABoolean(string ptSettingName)
    {
        return s_ptSettingBooleans.Contains(ptSettingName);
    }
}
