clear
$a = Get-Content C:\Input.txt

$collectionWithItems = New-Object System.Collections.ArrayList
$a.Length
for($i = 0; $i -lt $a.Length; $i++)
{
    $myString = $a[$i]
    $temp = New-Object System.Object

    $LastPos = $myString.LastIndexOf(" ") # Do not include the "_" character
    $subString = $myString.Substring($LastPos,$myString.Length - $LastPos)
    $temp | Add-Member -MemberType NoteProperty -Name "amount" -Value $subString
    $startPos = $myString.IndexOf(" ") # Do not include the "_" character
    $subString = $myString.Substring($startPos,$myString.Length - ($myString.Length - $LastPos + $startPos) )
    $temp | Add-Member -MemberType NoteProperty -Name "desc" -Value $subString
    $subString = $myString.Substring(1,$startPos)
    $temp | Add-Member -MemberType NoteProperty -Name "date" -Value $subString
    $collectionWithItems.Add($temp) | Out-Null
}
$collectionWithItems.Count
 #$collectionWithItems | Format-Table
 $csvFileName = 'C:\Output-'+$d.Day+'-'+$d.Month+'-'+$d.Year+'.csv'
 $collectionWithItems  | export-csv -Path $csvFileName
 
